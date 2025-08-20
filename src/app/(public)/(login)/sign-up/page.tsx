"use client";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Input } from "@/components/inputs/input";
import { InputPassword } from "@/components/inputs/input-password";
import ChevronLeftIcon from "@/icons/chevron-left.svg";
import { useSignUpStore } from "@/modules/auth/ store/user.create.store";
import { createUser } from "@/modules/auth/service/auth.service";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isChecked: boolean;
};

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { firstName, lastName, email, isChecked, setAll, clear } = useSignUpStore();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      isChecked: isChecked,
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    const sub = watch((values) => {
      setAll({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        isChecked: values.isChecked,
      });
    });
    return () => sub.unsubscribe();
  }, [watch, setAll]);

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);

    try {
      const result = await createUser({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });

      if (result?.status === 201) {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const result = await signIn("credentials", {
          redirect: false,
          identifier: data.email,
          password: data.password,
        });

        if (result?.ok) {
          toast.success("Usuário criado e autenticado com sucesso!");
          router.replace("/home");
          reset();
          clear();
        } else {
          console.error(result?.error ?? "Erro ao fazer login.");
        }
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? "Erro ao realizar cadastro.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        <Link
          href="/sign-in"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Voltar ao login
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-titulo-1 dark:text-white/90 sm:text-title-md">
              Cadastre-se
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Digite seus dados para criar uma conta!
            </p>
          </div>
          <div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <Controller
                      name="firstName"
                      control={control}
                      rules={{
                        required: "Nome é obrigatório.",
                        minLength: {
                          value: 2,
                          message: "O nome deve ter pelo menos 2 caracteres.",
                        },
                      }}
                      render={({ field }) => (
                        <div>
                          <Input
                            {...field}
                            placeholder="Digite seu nome"
                            type="text"
                            label="Nome"
                            isRequired
                            aria-invalid={!!errors.firstName || undefined}
                            hint={errors.firstName?.message}
                            error={!!errors.firstName}
                          />
                        </div>
                      )}
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <Controller
                      name="lastName"
                      control={control}
                      rules={{
                        required: "Sobrenome é obrigatório.",
                        minLength: {
                          value: 2,
                          message: "O sobrenome deve ter pelo menos 2 caracteres.",
                        },
                      }}
                      render={({ field }) => (
                        <div>
                          <Input
                            {...field}
                            placeholder="Digite seu sobrenome"
                            type="text"
                            label="Sobrenome"
                            isRequired
                            aria-invalid={!!errors.lastName || undefined}
                            hint={errors.lastName?.message}
                            error={!!errors.lastName}
                          />
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email é obrigatório.",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Email inválido.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <Input
                          {...field}
                          placeholder="Digite seu email"
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
                      <div>
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
                <div>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                      required: "Confirmação de senha é obrigatória.",
                      minLength: {
                        value: 6,
                        message: "A confirmação de senha deve ter pelo menos 6 caracteres.",
                      },
                      validate: (value) =>
                        value === watch("password") || "As senhas não coincidem.",

                    }}
                    render={({ field }) => (
                      <div>
                        <InputPassword
                          {...field}
                          placeholder="Digite sua senha novamente"
                          label="Confirmação de Senha"
                          isRequired
                          name={field.name}
                          ref={field.ref}
                          onChange={(e) => field.onChange(e?.target?.value)}
                          aria-invalid={!!errors.confirmPassword || undefined}
                          hint={errors.confirmPassword?.message}
                          error={!!errors.confirmPassword}
                        />
                      </div>
                    )}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Controller
                    name="isChecked"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        className="w-5 h-5"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                    Ao se cadastrar, você concorda com nossos{" "}
                    <Link
                      href="/use-terms"
                      className="font-medium text-gray-800 underline hover:text-blue-600 dark:text-white/90 dark:hover:text-blue-400"
                    >
                      Termos e Condições
                    </Link>
                    , e com nossa{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-gray-800 underline hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex items-center justify-center w-full px-4 py-3">
                  <Button
                    className="w-full"
                    size="sm"
                    isLoading={isLoading}
                    type="submit"
                  >
                    Cadastre-se
                  </Button>
                </div>
              </div>
            </form>
            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Já tem uma conta?{" "}
                <Link
                  href="/sign-in"
                  className="font-medium text-gray-800 underline hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  Entrar Agora
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
