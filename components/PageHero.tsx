interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  accent?: string; // highlighted word in title
}

export default function PageHero({ label, title, subtitle, accent }: PageHeroProps) {
  // If accent is provided, split title and highlight that word
  const renderTitle = () => {
    if (!accent) return <span className="text-gradient">{title}</span>;
    const parts = title.split(accent);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-blue">{accent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden hero-grid">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {label && (
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-up">
            <div className="w-1 h-4 bg-blue-600 rounded-full" />
            <span className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase">{label}</span>
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6 animate-fade-up-delay-1">
          {renderTitle()}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed animate-fade-up-delay-2">
            {subtitle}
          </p>
        )}
        <div className="mt-8 h-px w-24 bg-blue-600/50 animate-fade-up-delay-3" />
      </div>
    </section>
  );
}
