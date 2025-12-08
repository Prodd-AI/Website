import { Checkbox } from "../atoms/Checkbox";
import { ErrorMessage } from "../atoms/ErrorMessage";

interface CheckboxGroupProps {
  label: string;
  name: string;
  options: readonly string[] | string[];
  selectedValues: string[];
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

/**
 * Molecular CheckboxGroup component
 * Combines label, multiple checkboxes, and error message
 * Validates that selected values are in the allowed options
 */
export function CheckboxGroup({
  label,
  name,
  options,
  selectedValues,
  onChange,
  error,
  required = false,
}: CheckboxGroupProps) {
  return (
    <div>
      <label className="block text-[16px] font-medium text-[#1A1A1A] mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <Checkbox
            key={option}
            label={option}
            checked={selectedValues.includes(option)}
            onChange={() => onChange(option)}
            name={name}
          />
        ))}
      </div>
      <ErrorMessage message={error} />
    </div>
  );
}
