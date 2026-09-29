import React from 'react';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const FEATURED_TREATMENTS = [
  {
    eyebrow: 'Dr. Luis Carlos Buco · Implantes & Carga Imediata',
    title: 'Implantes Carga Imediata: Seu Sorriso Recuperado em 1 Dia',
    description: 'Com a técnica de carga imediata, o Dr. Luis Carlos Buco restabelece dentes perdidos e a segurança do sorriso em apenas 1 dia, proporcionando agilidade, estética e recuperação rápida.',
    highlight: 'Recuperação rápida da função mastigatória e autoestima sem esperas prolongadas.',
    label: 'Destaque',
    href: '/dental-implants/',
    cta: 'Saiba mais sobre Implantes',
  },
  {
    eyebrow: 'Dr. Luis Carlos Buco · Ortodontia & Especialidades',
    title: 'Aparelhos Ortodônticos e Cuidado Minucioso',
    description: 'Planejamento ortodôntico de precisão e tratamentos restauradores conduzidos com extrema atenção e competência pelo Dr. Luis Carlos Buco, garantindo alinhamento e saúde bucal completa.',
    highlight: 'Harmonia do sorriso, mordida equilibrada e atendimento acolhedor.',
    label: 'Resultado',
    href: '/braces/',
    cta: 'Saiba mais sobre Aparelhos',
  },
];

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-forest-ink block mb-2 font-medium uppercase tracking-wider">Casos em Destaque</span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">Tratamentos e reconstruções clínicas</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FEATURED_TREATMENTS.map((treatment, index) => (
            <AnimateOnScroll key={treatment.href} animation={index === 0 ? 'fade-right' : 'fade-left'} duration={0.9}>
              <article className="h-full border border-mist bg-paper p-6 md:p-8 shadow-sm flex flex-col">
                <span className="font-body text-13 text-forest uppercase tracking-wider block mb-2 font-medium">{treatment.eyebrow}</span>
                <h3 className="font-display text-26 md:text-33 text-forest-ink mb-4">{treatment.title}</h3>
                <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">{treatment.description}</p>
                <div className="p-4 bg-forest text-paper-on-dark border-l-4 border-[#D4AF37] mb-6 rounded-sm">
                  <span className="font-body text-13 text-paper-on-dark/90"><strong className="font-semibold">{treatment.label}:</strong> {treatment.highlight}</span>
                </div>
                <div className="mt-auto"><Button href={treatment.href} variant="ghost" size="md">{treatment.cta}</Button></div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
