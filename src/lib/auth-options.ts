import { decodeJwt } from "@/helpers/jwt-decode";
import { authService, validateRefreshToken } from "@/modules/auth/service/auth.service";
import { IDecodedUserPayloadProps } from "@/types/jwt-payload";
import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"identifier" | "password", string> | undefined,
        _req: any,
      ): Promise<User | null> {
        const identifier = credentials?.identifier;
        const password = credentials?.password;

        if (!identifier || !password) {
          throw new Error("Identificador ou senha ausentes.");
        }

        const payload = {
          email: identifier,
          password,
        };

        try {
          const response = await authService(payload);

          const user = response.data.data.user;

          const data = response.data.data;
          const accessToken = data.token;
          const refreshToken = data.refreshToken;

          if (!accessToken || !refreshToken) {
            console.error("Tokens ausentes:", { accessToken, refreshToken });
            throw new Error("Token de acesso ou refresh ausente.");
          }

          const decoded = decodeJwt(accessToken) as IDecodedUserPayloadProps;

          return {
            id: user.id,
            email: user.email,
            phone: user.phone,
            firstName: user.firstName,
            lastName: user.lastName,
            dateOfBirth: user.dateOfBirth,
            profilePic: user.profilePic,
            accessToken: accessToken,
            refreshToken: refreshToken,
            accessTokenExpires: decoded.exp ? decoded.exp * 1000 : null,
          };
        } catch (error: any) {
          console.error("Error authenticating user:", error);
          throw new Error(error?.response?.data.message || "Erro ao autenticar usuário.");

        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        return {
          ...token,
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          dateOfBirth: user.dateOfBirth,
          profilePic: user.profilePic,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          accessTokenExpires: user.accessTokenExpires,
        };
      }

      console.log("Verificando se o token precisa ser atualizado:", token);

      const shouldRefresh = Date.now() > (token.accessTokenExpires);

      if (!shouldRefresh) {
        console.log("Token is still valid, no need to refresh.", token);
        return token;
      }

      const decodedRefresh = decodeJwt(token.refreshToken);
      const refreshExpired = !decodedRefresh.exp || Date.now() > decodedRefresh.exp * 1000;

      if (refreshExpired) {
        console.log("Refresh token expirado, limpando sessão e redirecionando.", token);

        return {
          accessToken: null,
          refreshToken: null,
          accessTokenExpires: 0,
          error: "RefreshTokenExpired",
        };
      }

      const response = await validateRefreshToken({
        refreshToken: token.refreshToken,
      });

      console.log("Response from refresh token validation:", response);

      const newToken = response.data.data.token;
      const newRefreshToken = response.data.data.refreshToken;

      const decoded = decodeJwt(newToken) as IDecodedUserPayloadProps;

      console.log("Decoded new access token:", decoded);

      return {
        ...token,
        accessToken: newToken,
        refreshToken: newRefreshToken,
        accessTokenExpires: decoded.exp ? decoded.exp * 1000 : null,
        error: null,
      };
    },
    async session({ session, token }: any) {
      session.user = {
        id: token.id,
        firstName: token.firstName,
        lastName: token.lastName,
        email: token.email,
        phone: token.phone,
        dateOfBirth: token.dateOfBirth,
        profilePic: token.profilePic,
      };
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;
      session.error = token.error ?? null;

      return session;
    },
  },
  events: {
    async signOut({ token }) {
      try {
        const accessToken = (token as any)?.accessToken as string | undefined;

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });
        console.log("Notificação de logout enviada ao backend no signOut.");
      } catch (err) {
        console.error("Falha ao notificar backend no signOut:", err);
      }
    },
  },
  pages: {
    signIn: "/sign-in"
  }
};