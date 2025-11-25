'use client';

import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700',
    elevated:
      'bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300',
    outlined:
      'bg-transparent rounded-xl p-6 border-2 border-primary-300 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors duration-300',
  };

  return (
    <div className={clsx(variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
};
