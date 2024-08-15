import React from 'react';

export const Progress = ({ value, className, ...props }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ${className}`} {...props}>
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};