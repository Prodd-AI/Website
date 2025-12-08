import React from "react";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";
import { ErrorMessage } from "../atoms/ErrorMessage";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  value: string | undefined;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
}

/**
 * Molecular FormField component
 * Combines label, input/textarea, and error message
 */
export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder,
  multiline = false,
  rows = 4,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[16px] font-medium text-[#1A1A1A] mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {multiline ? (
        <Textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          hasError={!!error}
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <Input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          hasError={!!error}
          placeholder={placeholder}
        />
      )}
      <ErrorMessage message={error} />
    </div>
  );
}
