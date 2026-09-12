import type { ComponentProps } from "react";

type TextProps = ComponentProps<"p">;

export function Text({ className, ...props }: TextProps) {
    return <p className={`text-text font-body mt-4 ${className}`} {...props} />;
}
