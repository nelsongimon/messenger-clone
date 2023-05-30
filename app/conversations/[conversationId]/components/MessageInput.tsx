"use client";

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  required?: boolean;
  placeholder?: string;
  type?: string;
}

export default function MessageInput({
  id,
  type,
  register,
  errors,
  required,
  placeholder
}: MessageInputProps) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, { required })}
        autoComplete={id}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100
          w-full
          rounded-full
          focus:outline-none
        "
      />
    </div>
  );
}
