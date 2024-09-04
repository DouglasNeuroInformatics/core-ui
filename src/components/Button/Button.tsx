import React from 'react';

import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { Simplify } from 'type-fest';

import { cn } from '../../utils.js';

export const BUTTON_ICON_SIZE = {
  lg: 18,
  md: 16,
  sm: 14
};

export const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'md',
      variant: 'primary'
    },
    variants: {
      size: {
        icon: 'p-1.5 aspect-square',
        lg: 'h-10 rounded-md px-8',
        md: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs'
      },
      variant: {
        danger: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        outline: 'border border-input bg-inherit shadow-sm',
        primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary: 'bg-secondary border text-secondary-foreground shadow-sm hover:bg-secondary/80'
      }
    }
  }
);

export type ButtonProps = Simplify<
  {
    asChild?: boolean;
    /** @deprecated - use children   */
    label?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>
>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { asChild, children, className, label, size = 'md', variant = 'primary', ...props },
  ref
) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props}>
      {label}
      <Slottable>{children}</Slottable>
    </Comp>
  );
});
