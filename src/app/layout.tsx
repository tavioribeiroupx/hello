import { ThemeProvider } from "@/context/theme.context";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Suspense } from "react";
import "./../styles/globals.css";
import Loading from "./loading";
import Providers from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: "Nux-App",
  description: "Painel de gerenciamento do site Nux",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getServerSession(authOptions);

  return (
    <html suppressHydrationWarning lang="pt-BR">
      <Suspense fallback={<Loading />} />
      <body suppressHydrationWarning className={`${outfit.className}`}>
        <ThemeProvider>
          <Providers session={null}>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
