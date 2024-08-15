import React from 'react';

export const Badge = ({ children, variant = 'default', className, ...props }) => {
  const baseStyle = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold';
  const variants = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <span 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </span>
  );
};