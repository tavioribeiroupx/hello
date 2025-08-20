import { NextResponse, type NextRequest } from "next/server";

const publicRoutes = [
  { path: "/", whenAuthenticated: "redirect" },
  { path: "/sign-in", whenAuthenticated: "redirect" },
  { path: "/sign-up", whenAuthenticated: "redirect" },
  { path: "/forgot-password", whenAuthenticated: "redirect" },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in'

export default async function middleware(request: NextRequest) {
  // const path = request.nextUrl.pathname;
  // const publicRoute = publicRoutes.find(route => route.path === path);

  // const token = await getToken({
  //   req: request,
  //   secret: process.env.NEXTAUTH_SECRET,
  // });

  // if (token?.error === "RefreshTokenExpired") {
  //   console.log("Refresh token expired, redirecting to sign-in");

  //   const redirectUrl = request.nextUrl.clone();

  //   redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
  //   redirectUrl.searchParams.set("error", "sessionExpired");

  //   return NextResponse.redirect(redirectUrl);
  // }

  // if (!token?.refreshToken) {
  //   console.log("Refresh token expired, redirecting to sign-in");

  //   const redirectUrl = request.nextUrl.clone();

  //   redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
  //   redirectUrl.searchParams.set("error", "sessionExpired");

  //   return NextResponse.redirect(redirectUrl);
  // }

  // const decode = jwtDecode(token?.refreshToken);
  // const refreshToken = decode as { exp: number };
  // const isAuthenticated = Date.now() < refreshToken.exp * 1000;

  // if (!isAuthenticated && publicRoute) {
  //   console.log("User is not authenticated and trying to access a public route");
  //   return NextResponse.next();
  // }

  // if (!isAuthenticated && !publicRoute) {
  //   console.log("User is not authenticated and trying to access a private route");

  //   const redirectUrl = request.nextUrl.clone();

  //   redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
  //   redirectUrl.searchParams.set("error", "unauthorized");

  //   return NextResponse.redirect(redirectUrl);
  // }

  // if (isAuthenticated && !publicRoute) {
  //   console.log("User is authenticated and trying to access a private route", token);
  //   return NextResponse.next();
  // }

  // if (isAuthenticated && publicRoute && publicRoute.whenAuthenticated === "redirect") {
  //   console.log("User is authenticated and trying to access a public route, redirecting to home");

  //   const redirectUrl = request.nextUrl.clone();

  //   redirectUrl.pathname = '/home';

  //   return NextResponse.redirect(redirectUrl);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (static images)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
