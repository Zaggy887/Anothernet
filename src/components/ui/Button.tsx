import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold transition-all duration-300 ease-out rounded-lg inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:scale-105 active:scale-95 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 touch-manipulation';

  const variantClasses = {
    primary: 'bg-gold text-navy hover:bg-gold/90 shadow-md',
    secondary: 'bg-navy text-white hover:bg-navy/90 shadow-md',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-navy'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[48px]'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
