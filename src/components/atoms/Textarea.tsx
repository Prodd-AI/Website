import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

/**
 * Atomic Textarea component with error state styling
 * Handles multi-line text input
 */
export function Textarea({
  hasError,
  className = "",
  ...props
}: TextareaProps) {
  const baseClasses =
    "w-full px-4 py-3 rounded-[10px] border focus:outline-none focus:border-[#6619DE] transition-colors resize-none";
  const errorClasses = hasError ? "border-red-500" : "border-[#E0E0E0]";

  return (
    <textarea
      className={`${baseClasses} ${errorClasses} ${className}`}
      value={props.value || ""}
      {...props}
    />
  );
}
