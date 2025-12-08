interface ErrorMessageProps {
  message?: string;
  className?: string;
}

/**
 * Atomic ErrorMessage component for displaying validation errors
 */
export function ErrorMessage({ message, className = "" }: ErrorMessageProps) {
  if (!message) return null;

  return <p className={`text-red-500 text-sm mt-1 ${className}`}>{message}</p>;
}
