import DOMPurify from "dompurify";

/**
 * Sanitize text input to prevent XSS attacks
 * @param text - The text to sanitize
 * @returns Sanitized text safe for display and storage
 */
export function sanitizeText(text: string): string {
  if (!text) return "";
  
  // Remove any HTML tags and scripts
  const sanitized = DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No attributes allowed
    KEEP_CONTENT: true, // Keep text content
  });
  
  return sanitized.trim();
}

/**
 * Validate that a value is in the allowed options list
 * @param value - The value to validate
 * @param allowedOptions - Array of allowed values
 * @returns True if value is valid, false otherwise
 */
export function isValidOption(value: string, allowedOptions: string[]): boolean {
  return allowedOptions.includes(value);
}

/**
 * Validate and sanitize an array of values against allowed options
 * @param values - Array of values to validate
 * @param allowedOptions - Array of allowed values
 * @returns Filtered array containing only valid options
 */
export function sanitizeArrayValues(
  values: string[],
  allowedOptions: string[]
): string[] {
  return values.filter((value) => isValidOption(value, allowedOptions));
}

/**
 * Sanitize form data object
 * @param data - Form data object with string and array values
 * @param fieldOptions - Map of field names to their allowed options
 * @returns Sanitized form data
 */
export function sanitizeFormData<T extends Record<string, unknown>>(
  data: T,
  fieldOptions: Record<string, readonly string[]>
): T {
  const sanitized = { ...data } as Record<string, unknown>;

  Object.keys(sanitized).forEach((key) => {
    const value = sanitized[key];

    if (Array.isArray(value)) {
      // Sanitize array values (checkboxes)
      if (fieldOptions[key]) {
        sanitized[key] = sanitizeArrayValues(value, [...fieldOptions[key]]);
      }
    } else if (typeof value === "string") {
      // Sanitize string values
      if (fieldOptions[key]) {
        // Validate against allowed options (dropdowns)
        sanitized[key] = isValidOption(value, [...fieldOptions[key]]) ? value : "";
      } else {
        // Sanitize text input
        sanitized[key] = sanitizeText(value);
      }
    }
  });

  return sanitized as T;
}
