import React from 'react';
import { cn } from '../../lib/utils';
const Input = React.forwardRef(({ 
  className,
  type = 'text',
  label,
  error,
  disabled = false,
  required = false,
  ...props 
}, ref) => {
  const baseStyles = 'flex h-10 w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50';
  
  const errorStyles = error ? 'border-error-500 focus:ring-error-500' : '';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-secondary-700 mb-1">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        className={cn(
          baseStyles,
          errorStyles,
          className
        )}
        ref={ref}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      />
      {error && (
        <p 
          id={`${props.id}-error`}
          className="mt-1 text-sm text-error-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };