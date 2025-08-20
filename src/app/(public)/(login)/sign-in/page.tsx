"use client"

import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Input } from "@/components/inputs/input";
import { InputPassword } from "@/components/inputs/input-password";
import ChevronLeftIcon from "@/icons/chevron-left.svg";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type LoginFormData = {
  email: string;
  password: string;
  remember: boolean;
};

const validateErrorToast = [
  { type: "unauthorized", message: "Sua sessão expirou, refaça o login!" },
  { type: "sessionExpired", message: "Sua sessão expirou, refaça o login!" },
  { type: "logout", message: "Logout realizado com sucesso!" },
  { type: "forbidden", message: "Você não tem permissões validas, refaça o login!" },
];

export default function SignIn() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useQueryState("error", parseAsString);

  useEffect(() => {
    if (error) {
      const errorToast = validateErrorToast.find((e) => e.type === error);
      if (errorToast) {
        toast.info(errorToast.message);
      }
    }
  }, [error]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        identifier: data.email,
        password: data.password,
      });

      if (result?.ok) {
        router.replace("/home");
        toast.success("Login realizado com sucesso!");
      } else {
        toast.error(result?.error ?? "Erro ao fazer login.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Voltar para a página inicial
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-titulo-1 dark:text-white/90 sm:text-title-md">
              Login
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Digite seu email e senha para fazer login!
            </p>
          </div>
          <div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-6">
                <div>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email é obrigatório.",
                      pattern: {
                        // RFC 5322 simplificado
                        value:
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Informe um email válido.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          placeholder="usuario@email.com"
                          type="email"
                          label="Email"
                          isRequired
                          aria-invalid={!!errors.email || undefined}
                          hint={errors.email?.message}
                          error={!!errors.email}
                        />
                      </div>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Senha é obrigatória.",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter pelo menos 6 caracteres.",
                      },
                    }}
                    render={({ field }) => (
                      <div className="relative">
                        <InputPassword
                          {...field}
                          placeholder="Digite sua senha"
                          label="Senha"
                          isRequired
                          name={field.name}
                          ref={field.ref}
                          onChange={(e) => field.onChange(e?.target?.value)}
                          aria-invalid={!!errors.password || undefined}
                          hint={errors.password?.message}
                          error={!!errors.password}
                        />
                      </div>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} label="Manter-se Conectado" />
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400"
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>
                <div>
                  <Button className="w-full" size="sm" isLoading={isLoading} type="submit">
                    Entrar
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Não tem uma conta? {""}
                <Link
                  href="/sign-up"
                  className="text-primary-500 hover:text-primary-600 dark:text-primary-400"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
