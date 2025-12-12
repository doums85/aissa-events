
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest",
    {
        variants: {
            variant: {
                default: "bg-stone-900 text-stone-50 hover:bg-stone-900/90",
                destructive:
                    "bg-red-500 text-stone-50 hover:bg-red-500/90",
                outline:
                    "border border-stone-200 bg-background hover:bg-stone-100 hover:text-stone-900",
                secondary:
                    "bg-stone-100 text-stone-900 hover:bg-stone-100/80",
                ghost: "hover:bg-stone-100 hover:text-stone-900",
                link: "text-stone-900 underline-offset-4 hover:underline",
                gold: "bg-[#D4AF37] text-white hover:bg-[#B5952F]",
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-10 rounded-sm px-4",
                lg: "h-14 rounded-sm px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
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
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
