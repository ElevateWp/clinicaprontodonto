import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const CLINIC_PHOTOS = [
  { src: '/images/prontodonto-reception.png', alt: 'Recepção da Clinica Prontodonto', label: 'Recepção' },
  { src: '/images/prontodonto-waiting-stairs.jpg', alt: 'Área de espera da Clinica Prontodonto', label: 'Área de espera' },
  { src: '/images/prontodonto-reception-desk.jpg', alt: 'Balcão de atendimento da Clinica Prontodonto', label: 'Atendimento' },
];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-forest-ink/70 block mb-2 font-medium uppercase tracking-wider">
            Nossa Estrutura
          </span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">
            Clinica Prontodonto em Manaus — Compensa 1
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_PHOTOS.map((photo, index) => (
            <AnimateOnScroll
              key={photo.src}
              animation="zoom-in"
              duration={0.8}
              delay={index * 0.1}
              className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"
            >
              <MediaParallax speed={0.05 + index * 0.01} className="w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </MediaParallax>
              <div className="absolute bottom-3 left-3 bg-forest/90 text-paper-on-dark font-body text-12 px-3 py-1 font-medium">
                {photo.label}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
