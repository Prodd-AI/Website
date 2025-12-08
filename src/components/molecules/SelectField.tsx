import React from "react";
import { Select } from "../atoms/Select";
import { ErrorMessage } from "../atoms/ErrorMessage";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: readonly string[] | string[];
  error?: string;
  required?: boolean;
  placeholder?: string;
}

/**
 * Molecular SelectField component
 * Combines label, select dropdown, and error message
 */
export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
  placeholder,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[16px] font-medium text-[#1A1A1A] mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        hasError={!!error}
        placeholder={placeholder}
      />
      <ErrorMessage message={error} />
    </div>
  );
}
