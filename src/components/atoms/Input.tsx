import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

/**
 * Atomic Input component with error state styling
 * Handles text, email, tel, and other input types
 */
export function Input({ hasError, className = "", ...props }: InputProps) {
  const baseClasses =
    "w-full h-[50px] px-4 rounded-[10px] border focus:outline-none focus:border-[#6619DE] transition-colors";
  const errorClasses = hasError ? "border-red-500" : "border-[#E0E0E0]";

  return (
    <input
      className={`${baseClasses} ${errorClasses} ${className}`}
      value={props.value || ""}
      {...props}
    />
  );
}
