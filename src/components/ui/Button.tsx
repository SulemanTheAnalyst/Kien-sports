import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300 select-none';

  const variantStyles = {
    primary: 'bg-kien-black text-white hover:bg-kien-charcoal active:bg-kien-graphite',
    secondary: 'border border-kien-black text-kien-black hover:bg-kien-black hover:text-white',
    white: 'bg-white text-kien-black hover:bg-kien-light-grey',
    ghost: 'text-kien-black hover:text-kien-grey',
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-sm',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
}
