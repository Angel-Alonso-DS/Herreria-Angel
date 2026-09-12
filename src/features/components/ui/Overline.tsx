type OverlineProps = { children: React.ReactNode };

export function Overline({ children }: OverlineProps) {
    return (
        <div className="flex items-center gap-4 text-eyebrow text-xs tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-eyebrow/50" />
            {children}
        </div>
    );
}
