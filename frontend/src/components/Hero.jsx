import React, { useState } from 'react';
import { MapPin, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/plan" className="btn btn-champ btn-md" style={{ borderRadius: 14, padding: '10px 22px', textDecoration: 'none' }}>
              Plan My Trip
            </Link>
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
        <div style={{ position: 'relative' }}>
          <div className="hero-images">
            {/* Top-left image */}
            <div className="hero-img" style={{ gridColumn: 1, gridRow: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80"
                alt="Manali snow peaks"
              />
            </div>

            {/* Right tall image */}
            <div
              className="hero-img hero-img-tall"
              style={{ gridColumn: 2, gridRow: '1 / 3' }}
            >
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80"
                alt="Bali temple"
              />
            </div>

            {/* Bottom-left image */}
            <div className="hero-img" style={{ gridColumn: 1, gridRow: 2 }}>
              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=80"
                alt="Paris Eiffel Tower"
              />
              {/* Trip Created popover */}
              <div className="trip-popover">
                <span className="trip-popover-dot" />
                <div>
                  <div className="trip-popover-title">Trip Created!</div>
                  <div className="trip-popover-sub">Goa · 5 days · ₹28,500</div>
                  <div className="trip-popover-bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
