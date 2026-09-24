import React from 'react';
import { ArrowRight } from 'lucide-react';
import { destinations } from '../data/landingData';

export default function TrendingDestinations() {
  return (
    <section className="section trending-section" id="destinations">
      <div className="section-inner">
        <div className="trending-header">
          <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.15, letterSpacing: '-1.5px', margin: 0 }}>Trending destinations</h2>
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
