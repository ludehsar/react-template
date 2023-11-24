import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

export interface ChipProps extends VariantProps<typeof chipClasses> {
  children?: React.ReactNode;
  className?: string;
}

const chipClasses = cva(
  'inline-flex items-center justify-center rounded-full text-primary uppercase gap-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary bg-opacity-[16%]',
        secondary:
          'bg-[#E6E6E7] dark:bg-card-dark-bg dark:text-white dark:text-opacity-[55%]',
      },
      size: {
        small: 'text-xs px-2 py-1',
        medium: 'text-md px-4 py-3',
        large: 'text-lg px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);

export const Chip: React.FC<ChipProps> = ({
  children,
  className,
  size,
  variant,
}) => {
  return (
    <div className={classNames(chipClasses({ size, variant }), className)}>
      {children}
    </div>
  );
};
