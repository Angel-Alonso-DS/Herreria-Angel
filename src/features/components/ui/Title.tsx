import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { ComponentProps } from "react";

const title = cva("tracking-[0.15em]", {
    variants: {
        variant: {
            normal: "items-center font-display",
            hero: "text-white font-display lg:text-text-primary",
            accent: "text-primary font-semibold",
        },
        size: {
            sm: "text-md md:text-lg",
            md: "text-lg md:text-xl",
            lg: "text-3xl md:text-5xl",
        },
    },
    defaultVariants: {
        variant: "normal",
        size: "md",
    },
});

type TitleProps = ComponentProps<"h1"> & VariantProps<typeof title>;

export function Title({ variant, size, className, ...props }: TitleProps) {
    return (
        <h1 className={cn(title({ variant, size }), className)} {...props} />
    );
}
