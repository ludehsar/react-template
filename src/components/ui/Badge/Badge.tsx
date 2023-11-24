import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

export interface BadgeProps extends VariantProps<typeof badgeClasses> {
  children?: React.ReactNode;
  className?: string;
}

const badgeClasses = cva(
  'inline-flex items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-base',
  {
    variants: {
      position: {
        default: '',
        'top-left': 'absolute -top-2 -left-2',
        'top-right': 'absolute -top-2 -right-2',
        'bottom-left': 'absolute -bottom-2 -left-2',
        'bottom-right': 'absolute -bottom-2 -right-2',
      },
      size: {
        small: 'h-2 w-2',
        medium: 'h-8 w-8',
        large: 'h-10 w-10',
      },
    },
    defaultVariants: {
      position: 'default',
      size: 'medium',
    },
  },
);

export const Badge: React.FC<BadgeProps> = ({
  children,
  position,
  size,
  className,
}) => (
  <div className={classNames(badgeClasses({ position, size }), className)}>
    {children}
  </div>
);
