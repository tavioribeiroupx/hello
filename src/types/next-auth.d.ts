import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      dateOfBirth?: string;
      profilePic?: string;
    } & DefaultSession["user"];
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number | null;
    error?: string | null;
  }
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    dateOfBirth?: string;
    profilePic?: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    dateOfBirth?: string;
    profilePic?: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number | null;
    error?: string | null;
  }
}