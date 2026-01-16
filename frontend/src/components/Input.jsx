import React, { useId } from 'react';

/**
 * Input Component
 *
 * A form input component with label, error handling, and accessibility features.
 * Provides consistent styling and validation feedback across the application.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.type='text'] - Input type (text, email, password, etc.)
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Input value (controlled component)
 * @param {Function} [props.onChange] - Change handler function
 * @param {string} [props.error] - Error message to display
 * @param {boolean} [props.disabled=false] - Whether input is disabled
 * @param {string} [props.label] - Label text for the input
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.id] - Custom ID (auto-generated if not provided)
 *
 * @example
 * // Basic input with label
 * <Input
 *   label="Email"
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 *
 * @example
 * // Input with error state
 * <Input
 *   label="Password"
 *   type="password"
 *   value={password}
 *   onChange={(e) => setPassword(e.target.value)}
 *   error="Password must be at least 6 characters"
 * />
 */
export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  label,
  className = '',
  id: customId,
  ...props
}) => {
  // Generate unique ID for accessibility
  const autoId = useId();
  const id = customId || autoId;
  const errorId = `${id}-error`;

  // Base input styles
  const baseStyles = 'w-full h-11 px-4 py-2.5 text-base text-gray-900 bg-white border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50';

  // Conditional styles based on state
  const stateStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';

  // Combine all styles
  const inputClasses = `${baseStyles} ${stateStyles} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={inputClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p
          id={errorId}
          className="mt-1.5 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
