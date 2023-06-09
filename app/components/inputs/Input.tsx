"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  disabled?: boolean;
}

export default function Input({ 
  label,
  id,
  type,
  register,
  errors,
  required,
  disabled
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="
        block
        text-sm
        font-medium
        leading-6
        text-gray-900
      ">
        {label}
      </label>
      <div className="mt-2">
        <input 
          id={id} 
          type={type} 
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(`
            form-input
            w-full
            block
            rounded-md
            border-0
            py-1.5
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-sky-600
            sm:text-sm
            sm:leading-6
          `
          , errors[id] && "focus:ring-rose-500"
          , disabled && "opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
}
