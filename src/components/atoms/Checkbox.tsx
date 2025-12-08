import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/**
 * Atomic Checkbox component with consistent styling
 * Includes label for accessibility
 */
export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className={`w-4 h-4 text-[#6619DE] border-gray-300 rounded focus:ring-[#6619DE] ${className}`}
        {...props}
      />
      <span className="text-[14px] text-[#1A1A1A]">{label}</span>
    </label>
  );
}
