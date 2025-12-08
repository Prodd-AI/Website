import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  options: readonly string[] | string[];
  placeholder?: string;
}

/**
 * Atomic Select component with error state styling
 * Validates that selected value is in the allowed options
 */
export function Select({
  hasError,
  className = "",
  options,
  placeholder = "Select option",
  ...props
}: SelectProps) {
  const baseClasses =
    "w-full h-[50px] px-4 rounded-[10px] border focus:outline-none focus:border-[#6619DE] transition-colors bg-white";
  const errorClasses = hasError ? "border-red-500" : "border-[#E0E0E0]";

  return (
    <select
      className={`${baseClasses} ${errorClasses} ${className}`}
      value={props.value || ""}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
