"use client"

import { AuthProvider } from "@/context/auth.context";
import { SidebarProvider } from "@/context/side-bar.context";
import { useTheme } from "@/hooks/use-theme.hooks";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
interface ProvidersProps {
  children: ReactNode;
  session: Session | null;
}

export default function Providers({ children, session }: ProvidersProps) {
  const { theme } = useTheme()

  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false} session={session}>
      <AuthProvider>
        <NuqsAdapter>
          <SidebarProvider>
          <ToastContainer
            closeOnClick
            pauseOnHover
            autoClose={2000}
            newestOnTop={true}
            position="top-right"
            rtl={false}
            theme={theme}
          />
          {children}
          </SidebarProvider>
        </NuqsAdapter>
      </AuthProvider>
    </SessionProvider>
  );
}