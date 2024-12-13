interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}