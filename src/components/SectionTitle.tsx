type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
        Portfolio
      </p>

      <h1 className="text-4xl font-black tracking-tight md:text-5xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}