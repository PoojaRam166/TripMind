import React, { useState } from 'react';
import { MapPin, ArrowRight, Search } from 'lucide-react';

const chips = ['Goa', 'Bali', 'Paris', 'Manali', 'Tokyo'];

// The 2x2 image grid hero images
const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
    alt: 'Manali snow peaks',
    style: { gridColumn: '1', gridRow: '1' },
  },
  {
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80',
    alt: 'Bali temple',
    style: { gridColumn: '2', gridRow: '1 / 3' },
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=80',
    alt: 'Paris Eiffel Tower',
    style: { gridColumn: '1', gridRow: '2' },
  },
];

export default function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section className="hero" id="explore">
      <div className="hero-inner">
        {/* Left: Text Content */}
        <div>
          <div className="hero-badge">
            <span>✦</span>
            AI-POWERED TRAVEL PLANNING
          </div>

          <h1 className="hero-headline">
            Your next<br />
            adventure,{' '}
            <span className="accent">planned<br />intelligently.</span>
          </h1>

          <p className="hero-subtext">
            Discover places, build personalized itineraries, compare stays, and
            manage your entire trip with TripMind.
          </p>

          {/* Search bar */}
          <div className="hero-search-wrap">
            <MapPin size={16} color="var(--color-text-muted)" strokeWidth={1.8} />
            <input
              type="text"
              placeholder="Plan a 5-day trip to Goa for two under ₹30,000…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-champ btn-md" style={{ borderRadius: 14, padding: '10px 22px' }}>
              Plan My Trip
            </button>
          </div>

          {/* Chips */}
          <div className="hero-chips">
            {chips.map((chip) => (
              <button key={chip} className="chip" onClick={() => setQuery(chip)}>
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="relative mt-8 md:mt-0 w-full h-full min-h-[400px] md:min-h-0">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[minmax(180px,1fr)_minmax(180px,1fr)] gap-3 sm:gap-4 h-full">
            {/* Top-left image - Manali */}
            <div className="hero-img rounded-2xl overflow-hidden relative shadow-md hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80"
                alt="Manali snow peaks"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Right tall image - Bali (Hero focus on mobile) */}
            <div className="hero-img rounded-2xl md:rounded-3xl overflow-hidden relative shadow-lg row-span-2 col-span-1 md:col-start-2 h-[350px] md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80"
                alt="Bali temple"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Bottom-left image - Paris */}
            <div className="hero-img rounded-2xl overflow-hidden relative shadow-md hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=80"
                alt="Paris Eiffel Tower"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Trip Created popover */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 min-w-[200px] z-10 border border-gray-100">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full shrink-0" />
                <div>
                  <div className="text-sm font-bold text-gray-900 mb-0.5">Trip Created!</div>
                  <div className="text-xs text-gray-500 font-medium">Goa · 5 days · ₹28,500</div>
                  <div className="h-1 bg-gray-100 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-green-500 w-2/3 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
