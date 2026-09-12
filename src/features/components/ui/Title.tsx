import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const title = cva("font-semibold tracking-[0.15em]", {
    variants: {
        variant: {
            normal: "",
            hero: "",
            accent: "",
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
});

type TitleProps = { children: React.ReactNode } & VariantProps<typeof title>;

export function Title({ variant, size, ...props }: TitleProps) {
    return <h1 className={cn(title({ variant, size }))} {...props} />;
}
