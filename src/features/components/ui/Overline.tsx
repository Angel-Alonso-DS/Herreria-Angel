type OverlineProps = { children: React.ReactNode };

export function Overline({ children }: OverlineProps) {
    return (
        <div className="flex font-mono items-center gap-4 text-secondary text-xs tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-secondary/50" />
            {children}
        </div>
    );
}
