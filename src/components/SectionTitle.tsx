type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}