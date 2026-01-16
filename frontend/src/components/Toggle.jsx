import React, { useId } from 'react';

/**
 * Toggle Component
 *
 * A switch/toggle component with smooth animations and accessibility support.
 * Follows ARIA switch pattern for screen reader compatibility.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} [props.checked=false] - Whether toggle is in checked state
 * @param {Function} [props.onChange] - Change handler called with new checked state
 * @param {boolean} [props.disabled=false] - Whether toggle is disabled
 * @param {string} [props.label] - Label text displayed next to toggle
 * @param {string} [props.checkedColor='#7DB57D'] - Background color when checked (default: peaceful emotion)
 * @param {string} [props.id] - Custom ID (auto-generated if not provided)
 *
 * @example
 * // Basic toggle with label
 * <Toggle
 *   checked={isEnabled}
 *   onChange={setIsEnabled}
 *   label="Enable notifications"
 * />
 *
 * @example
 * // Toggle with custom color
 * <Toggle
 *   checked={darkMode}
 *   onChange={setDarkMode}
 *   label="Dark mode"
 *   checkedColor="#4A7C8C"
 * />
 *
 * @example
 * // Disabled toggle
 * <Toggle
 *   checked={true}
 *   disabled
 *   label="This setting is locked"
 * />
 */
export const Toggle = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  checkedColor = '#7DB57D',
  id: customId,
  ...props
}) => {
  // Generate unique ID for accessibility
  const autoId = useId();
  const id = customId || autoId;

  // Handle toggle click
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  // Handle keyboard interaction
  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="inline-flex items-center">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={label ? `${id}-label` : undefined}
        id={id}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full
          border-2 border-transparent transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${checked ? 'focus:ring-opacity-50' : 'focus:ring-gray-400'}
        `}
        style={{
          backgroundColor: checked ? checkedColor : '#D1D5DB'
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full
            bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out
            ${checked ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
      {label && (
        <label
          id={`${id}-label`}
          htmlFor={id}
          className={`ml-3 text-sm font-medium text-gray-700 ${disabled ? 'opacity-50' : 'cursor-pointer'}`}
          onClick={!disabled ? handleToggle : undefined}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;
