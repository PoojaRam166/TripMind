import React from 'react';
import { ArrowRight } from 'lucide-react';
import { destinations } from '../data/landingData';

export default function TrendingDestinations() {
  return (
    <section className="py-12 sm:py-24 bg-[var(--color-surface-2)]" id="destinations">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 sm:mb-12 text-center md:text-left">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">Trending destinations</h2>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <img src={dest.image} alt={dest.name} loading="lazy" />
              <div className="destination-overlay" />
              <span className="destination-badge">{dest.badge}</span>
              <div className="destination-info">
                <p className="destination-name">{dest.name}</p>
                <p className="destination-country">{dest.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
