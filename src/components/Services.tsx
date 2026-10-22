import { useEffect, useState } from 'react';
import {
  Scissors,
  Palette,
  Sparkles,
  Droplet,
  Wind,
  Crown,
  Flower2,
  Clock,
  Tag,
  ArrowRight,
  X,
} from 'lucide-react';
import { services } from '@/data/salonData';
import type { Service } from '@/data/salonData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors,
  Palette,
  Sparkles,
  Droplet,
  Wind,
  Crown,
  Flower2,
};

const categories = ['Tous', 'Coiffure', 'Couleur', 'Soins', 'Mariage', 'Hommes'] as const;

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  const handleBook = () => {
    setSelected(null);
    setTimeout(() => {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const filtered =
    activeCategory === 'Tous'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-cream-50 dark:bg-noir-600 relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-50 dark:bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 opacity-0-init animate-fade-up">
          <p className="text-gold-600 dark:text-gold-400 font-sans text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Nos prestations
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-800 dark:text-cream-50 leading-tight">
            Services de <span className="text-gold-gradient">beauté</span>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6" />
          <p className="text-stone-500 dark:text-stone-400 text-lg mt-6">
            Une gamme complète de prestations pour sublimer vos cheveux, des
            classiques aux plus créatives.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-white shadow-gold'
                  : 'bg-cream-100 dark:bg-noir-400 text-stone-500 dark:text-stone-400 hover:bg-gold-100 dark:hover:bg-gold-900/30 hover:text-gold-700 dark:hover:text-gold-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service: Service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <article
                key={service.id}
                className="group bg-cream-50 dark:bg-noir-400 rounded-3xl overflow-hidden border border-gold-100 dark:border-gold-900/40 hover-lift hover:shadow-gold-lg opacity-0-init animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 img-zoom">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-cream-50/90 dark:bg-noir-500/90 backdrop-blur flex items-center justify-center shadow-gold">
                    <Icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cream-50/90 dark:bg-noir-500/90 backdrop-blur text-xs font-medium text-gold-700 dark:text-gold-300">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-serif font-semibold text-stone-800 dark:text-cream-50">
                      {service.name}
                    </h3>
                    <span className="text-gold-700 dark:text-gold-400 font-serif font-semibold whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gold-100 dark:border-gold-900/40">
                    <span className="flex items-center gap-1.5 text-sm text-stone-400 dark:text-stone-500">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                    <button
                      onClick={() => setSelected(service)}
                      className="flex items-center gap-1 text-sm font-medium text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors group/btn"
                    >
                      Voir détails
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-stone-900/80 dark:bg-noir-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-cream-50/20 dark:bg-noir-400/40 flex items-center justify-center text-white hover:bg-cream-50/40 dark:hover:bg-gold-900/60 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            className="relative bg-cream-50 dark:bg-noir-400 rounded-3xl shadow-gold-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[300px] md:min-h-[500px]">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900/10" />
              </div>

              <div className="p-8 md:p-10 flex flex-col gap-5">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-100 dark:bg-gold-900/40 text-xs font-medium text-gold-700 dark:text-gold-300 uppercase tracking-wider">
                    {selected.category}
                  </span>
                  <h3
                    id="service-dialog-title"
                    className="text-3xl font-serif font-semibold text-stone-800 dark:text-cream-50 mt-3"
                  >
                    {selected.name}
                  </h3>
                </div>

                <div className="gold-divider w-20" />

                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                  {selected.description || 'Nos coiffeuses vous conseilleront pour trouver la prestation adaptée à vos envies.'}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span>{selected.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                    <Tag className="w-4 h-4 text-gold-500" />
                    <span className="text-gold-700 dark:text-gold-400 font-serif font-semibold">
                      {selected.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBook}
                  className="group mt-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-gradient text-white font-medium rounded-full shadow-gold hover:shadow-gold-lg transition-all duration-400 hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  Réserver cette prestation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
