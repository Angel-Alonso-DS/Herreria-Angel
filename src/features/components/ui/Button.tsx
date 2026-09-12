import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

const button = cva(
    "inline-flex items-center justify-center rounded-sm font-semibold tracking-[0.15em] transition-colors duration-300",
    {
        variants: {
            variant: {
                normal: "",
                outline: "",
            },
            size: {
                sm: "h-10 px-5 text-xs",
                md: "h-12 px-6 text-sm",
                lg: "h-14 px-8 text-sm",
            },
        },
        defaultVariants: {
            variant: "normal",
            size: "md",
        },
    },
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({ variant, size, className, ...props }: ButtonProps) {
    return (
        <button
            className={cn(button({ variant, size }), className)}
            {...props}
        />
    );
}
