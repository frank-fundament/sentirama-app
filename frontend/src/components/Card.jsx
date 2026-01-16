import React from 'react';

/**
 * Card Component
 *
 * A container component with elevation (shadow) variants and responsive padding.
 * Provides a consistent card layout pattern throughout the application.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {'subtle' | 'default' | 'elevated'} [props.shadow='default'] - Shadow intensity level
 * @param {string} [props.className] - Additional CSS classes for customization
 * @param {boolean} [props.hover=false] - Whether to increase shadow on hover
 *
 * @example
 * // Basic card with default shadow
 * <Card>
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * @example
 * // Elevated card with hover effect
 * <Card shadow="elevated" hover>
 *   <button>Click me</button>
 * </Card>
 *
 * @example
 * // Subtle card with custom classes
 * <Card shadow="subtle" className="border-2 border-blue-500">
 *   <p>Custom styled card</p>
 * </Card>
 */
export const Card = ({
  children,
  shadow = 'default',
  className = '',
  hover = false,
  ...props
}) => {
  // Base card styles
  const baseStyles = 'bg-white rounded-lg p-4 md:p-6 transition-shadow duration-200';

  // Shadow variants
  const shadowStyles = {
    subtle: 'shadow-sm',
    default: 'shadow',
    elevated: 'shadow-lg'
  };

  // Hover shadow variants (one level up from current)
  const hoverShadowStyles = {
    subtle: 'hover:shadow',
    default: 'hover:shadow-lg',
    elevated: 'hover:shadow-xl'
  };

  // Combine all styles
  const cardClasses = `${baseStyles} ${shadowStyles[shadow]} ${hover ? hoverShadowStyles[shadow] : ''} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
