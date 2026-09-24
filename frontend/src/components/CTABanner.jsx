import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-24 px-4 text-center" style={{ background: 'var(--color-ink)' }}>
      <div className="max-w-[640px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Your next trip starts with one idea.</h2>
        <p className="text-lg text-white/70 mb-8 font-medium">Join thousands of travelers planning smarter with TripMind.</p>
        <Link to="/register" className="inline-flex items-center justify-center gap-2 bg-[var(--color-gold)] text-[var(--color-ink)] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform no-underline">
          Start Planning Free <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
