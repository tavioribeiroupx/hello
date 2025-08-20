"use client"

import { Button } from "@/components/button";
import ThemeToggle from "@/components/theme-toggler";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative p-6 z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex lg:flex-row w-full h-screen justify-center dark:bg-gray-900 flex-col sm:p-0">
        <div className="flex flex-col flex-1 lg:w-1/2 w-full items-center justify-center">
          <h1 className="text-4xl font-bold dark:text-white text-gray-900">Bem-vindo ao Nux App</h1>
          <div className="flex items-center justify-center w-1/2 px-4 py-3 mt-8">
            <Button
              className="w-full"
              size="sm"
              isLoading={false}
              onClick={() => router.push("/sign-in")}
            >
              Fazer Login
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-full bg-primary-950 dark:bg-white/5 lg:grid items-center hidden">
          <div className="relative items-center justify-center flex z-1">
            <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
              <Image
                width={540}
                height={254}
                src="/images/shapes/grid-01.svg"
                alt="grid"
              />
            </div>
            <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
              <Image
                width={540}
                height={254}
                src="/images/shapes/grid-01.svg"
                alt="grid"
              />
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <Link href="/" className="block mb-4">
                <Image
                  width={231}
                  height={48}
                  src="./images/logo/auth-logo.svg"
                  alt="Logo"
                />
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">
                Boa tarde Adriano
              </p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
