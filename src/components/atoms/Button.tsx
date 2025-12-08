import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  loadingText?: string;
}

/**
 * Atomic Button component with loading state and variants
 */
export function Button({
  variant = "primary",
  isLoading = false,
  loadingText = "Loading...",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "w-full h-[50px] min-h-[50px] max-h-[50px] py-0 rounded-[10px] hover:transform hover:scale-[1.02] transition-all duration-200 cursor-pointer font-medium text-[16px] flex items-center justify-center";

  const variantClasses = {
    primary:
      "text-white bg-gradient-to-br from-[#6619DE] via-[#6619DE] to-[#1C75BC] shadow-[0_13px_38.1px_0_rgba(104,122,190,0.66)]",
    secondary: "text-[#6619DE] bg-white border-2 border-[#6619DE]",
  };

  const disabledClasses =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
}
