import React from 'react';

/**
 * IconButton Component
 *
 * A button component designed specifically for icons, with proper touch targets
 * and minimal styling. Ideal for toolbar actions, close buttons, and icon-only interactions.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.icon - Lucide React icon component to render
 * @param {Function} [props.onClick] - Click handler function
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {string} props.ariaLabel - Accessible label for screen readers (required for icon-only buttons)
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Button size (affects icon size and padding)
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * // Basic icon button
 * import { X } from 'lucide-react';
 * <IconButton
 *   icon={X}
 *   onClick={handleClose}
 *   ariaLabel="Close dialog"
 * />
 *
 * @example
 * // Large icon button
 * import { Settings } from 'lucide-react';
 * <IconButton
 *   icon={Settings}
 *   onClick={openSettings}
 *   ariaLabel="Open settings"
 *   size="lg"
 * />
 *
 * @example
 * // Disabled icon button
 * import { Trash2 } from 'lucide-react';
 * <IconButton
 *   icon={Trash2}
 *   disabled
 *   ariaLabel="Delete item"
 * />
 */
export const IconButton = ({
  icon: Icon,
  onClick,
  disabled = false,
  ariaLabel,
  size = 'md',
  className = '',
  ...props
}) => {
  // Base button styles - minimum 44x44px for touch targets
  const baseStyles = 'inline-flex items-center justify-center rounded-lg bg-transparent text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent';

  // Size variants - ensuring minimum touch target of 44x44px
  const sizeStyles = {
    sm: 'w-10 h-10 p-2',   // 40x40px (slightly smaller for dense UIs)
    md: 'w-11 h-11 p-2.5', // 44x44px (standard touch target)
    lg: 'w-12 h-12 p-3'    // 48x48px (larger for primary actions)
  };

  // Icon size mapping
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  // Combine all styles
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={buttonClasses}
      {...props}
    >
      {Icon && <Icon size={iconSizes[size]} aria-hidden="true" />}
    </button>
  );
};

export default IconButton;
