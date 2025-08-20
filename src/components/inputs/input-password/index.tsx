"use client";

import EyeCloseIcon from "@/icons/eye-close.svg";
import EyeIcon from "@/icons/eye.svg";
import { forwardRef, useState } from "react";
import { Input } from "../input";

interface InputPasswordProps {
  placeholder?: string;
  label: string;
  isRequired?: boolean;
  hint?: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ placeholder, label, isRequired, hint, error, onChange, name }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggle = () => setShowPassword((v) => !v);

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          label={label}
          isRequired={isRequired}
          hint={hint}
          error={error}
          onChange={onChange}
          name={name}
          ref={ref}
          className="pr-12"
        />

        <button
          type="button"
          onClick={toggle}
          onMouseDown={(e) => e.preventDefault()}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          aria-pressed={showPassword}
          className="absolute inset-y-0 right-0 top-8 flex items-center"
        >
          {showPassword ? (
            <EyeCloseIcon className="h-7 w-7 fill-black dark:fill-white" />
          ) : (
            <EyeIcon className="h-7 w-7 fill-black dark:fill-white" />
          )}
        </button>
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export { InputPassword };
