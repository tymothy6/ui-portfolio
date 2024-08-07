import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:hover:text-accent-foreground",
        outlineinverse:
          "border border-input bg-accent hover:bg-background hover:text-accent-foreground dark:hover:text-accent-foreground",
        outlinebg60:
          "text-slate-800 dark:text-slate-300 border-0 bg-background/0 hover:bg-accent/50 hover:text-accent-foreground dark:hover:text-accent-foreground",
        secondary:
          "border border-input bg-secondary text-secondary-foreground hover:bg-secondary/50 hover:border-primary",
        secondaryblog:
          "border border-input bg-secondary/50 text-foreground/90 hover:bg-secondary/20 hover:text-foreground hover:border-primary",
        ghost:
          "text-slate-800 dark:text-slate-300 hover:bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground",
        ghostnobg:
          "text-slate-800 dark:text-slate-300 hover:text-accent-foreground dark:hover:text-accent-foreground",
        link: "text-foreground decoration-primary decoration-2 underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-br from-primary to-indigo-600 text-primary-foreground hover:from-primary/80 hover:to-indigo-600/90 hover:animate-gradient-xy active:from-primary/90 active:to-pink-500/90 active:animate-gradient-xy",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-8 w-8 md:h-10 md:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
