import React from 'react';
import { Loader2 } from 'lucide-react';
import { EMOTIONS } from '../utils/constants';

/**
 * Button Component
 *
 * A versatile button component with multiple variants, sizes, and states.
 * Supports primary, secondary, emotion-based, and icon button styles.
 *
 * @component
 * @param {Object} props - Component props
 * @param {'primary' | 'secondary' | 'emotion' | 'icon'} [props.variant='primary'] - Button style variant
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Button size
 * @param {'mad' | 'peaceful' | 'sad'} [props.emotion] - Emotion type for emotion variant
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {boolean} [props.loading=false] - Whether button is in loading state
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.ariaLabel] - Accessible label for screen readers
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * // Primary button
 * <Button variant="primary" onClick={handleClick}>Submit</Button>
 *
 * @example
 * // Emotion button with loading state
 * <Button variant="emotion" emotion="peaceful" loading>Saving...</Button>
 *
 * @example
 * // Icon button
 * <Button variant="icon" ariaLabel="Close" onClick={handleClose}>×</Button>
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  emotion,
  disabled = false,
  loading = false,
  children,
  onClick,
  ariaLabel,
  className = '',
  ...props
}) => {
  // Base styles applied to all buttons
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-400',
    emotion: emotion
      ? `text-white hover:opacity-90 active:opacity-80 focus:ring-opacity-50`
      : 'bg-gray-400 text-white hover:bg-gray-500 active:bg-gray-600 focus:ring-gray-500',
    icon: 'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-400'
  };

  // Size-specific styles
  const sizeStyles = {
    sm: variant === 'icon' ? 'w-10 h-10 p-2' : 'px-3 py-2 text-sm h-10',
    md: variant === 'icon' ? 'w-11 h-11 p-2.5' : 'px-4 py-2.5 text-base h-11',
    lg: variant === 'icon' ? 'w-12 h-12 p-3' : 'px-6 py-3 text-lg h-12'
  };

  // Get emotion color if emotion variant
  const emotionColor = emotion && EMOTIONS[emotion] ? EMOTIONS[emotion].color : null;
  const emotionStyles = emotionColor ? { backgroundColor: emotionColor } : {};

  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type="button"
      className={buttonClasses}
      style={variant === 'emotion' && emotionColor ? emotionStyles : undefined}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <Loader2 className="animate-spin mr-2" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      )}
      {children}
    </button>
  );
};

export default Button;
