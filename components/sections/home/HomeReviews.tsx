import React from 'react';
import PanelWipe from '@/components/motion/PanelWipe';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { PATIENT_REVIEWS, CLINIC_INFO } from '@/lib/clinic-data';

const REVIEW_HIGHLIGHTS = [
  'Dentistas atenciosos',
  'Clínica completa',
  'Ambiente confortável',
  'Segurança do paciente',
  'LGBTQ+ friendly',
  'Women-owned',
];

export default function HomeReviews() {
  return (
    <PanelWipe className="py-20 md:py-32">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-body text-13 text-lime block mb-2 uppercase tracking-wider font-semibold">
                Avaliações Verificadas no Google Maps
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper-on-dark">
                O que nossos pacientes dizem sobre a Clinica Prontodonto
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-paper/10 border border-mist/20 px-4 py-2.5 rounded-none self-start md:self-auto">
              <span className="text-lime text-18 font-bold">4.7 ★★★★★</span>
              <span className="text-paper-on-dark/80 font-body text-13">42 avaliações no Google Maps</span>
            </div>
          </div>

          {/* Highlight badges */}
          <div className="flex flex-wrap gap-2 mb-12">
            {REVIEW_HIGHLIGHTS.map((tag) => (
              <span
                key={tag}
                className="font-body text-12 text-paper-on-dark/85 bg-paper/10 border border-mist/20 px-3 py-1 rounded-full"
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PATIENT_REVIEWS.slice(0, 3).map((review, idx) => (
            <AnimateOnScroll
              key={review.id}
              animation="fade-up"
              delay={idx * 0.1}
            >
              <div className="flex flex-col justify-between p-8 border border-mist/20 bg-paper/5 h-full hover:bg-paper/10 transition-colors shadow-sm">
                <div>
                  <div className="flex items-center gap-1 text-[#28C5F4] text-14 mb-4">
                    ★★★★★
                  </div>
                  <blockquote className="font-display text-17 md:text-19 text-paper-on-dark leading-relaxed mb-8">
                    “{review.quote}”
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-mist/20 flex items-center justify-between font-body text-13 text-paper-on-dark/70">
                  <div>
                    <span className="font-semibold text-paper-on-dark block text-15">{review.author}</span>
                    <span className="text-paper-on-dark/60 text-12">{review.treatment}</span>
                  </div>
                  <span className="text-lime font-medium text-12 bg-paper/10 px-2.5 py-1">
                    {review.year}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </PanelWipe>
  );
}
