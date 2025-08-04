import React from 'react';
import { cn } from '../../lib/utils';
const Button = React.forwardRef(({ 
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
    secondary: 'bg-secondary-200 text-secondary-900 hover:bg-secondary-300 focus-visible:ring-secondary-500',
    outline: 'border border-secondary-300 bg-white text-secondary-900 hover:bg-secondary-50 focus-visible:ring-secondary-500',
    ghost: 'text-secondary-900 hover:bg-secondary-100 focus-visible:ring-secondary-500',
  };
  
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };