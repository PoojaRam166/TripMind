import React, { useState, useEffect } from 'react';
import { exploreService } from '../../services/exploreService';
import { Navigation } from 'lucide-react';

export default function NearbySection() {
  const [nearby, setNearby] = useState([]);

  useEffect(() => {
    exploreService.getNearbyPlaces().then(data => setNearby(data));
  }, []);

  if (nearby.length === 0) return null;

  return (
    <div className="px-4 md:px-10 pb-12 md:pb-[60px]">
      <div className="flex flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 m-0 flex items-center gap-2">
          Explore Destinations near you <Navigation size={22} className="text-[var(--color-gold)] fill-[var(--color-gold)] shrink-0" />
        </h3>
        <button className="btn-view-all shrink-0 whitespace-nowrap">
          View on map <span>&rarr;</span>
        </button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {nearby.map(dest => (
          <div key={dest.id} className="hover-lift cursor-pointer group" style={{ 
            display: 'flex', gap: '16px', background: 'var(--color-surface)', 
            border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', alignItems: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
            transition: 'all 0.3s ease'
          }}>
            <img src={dest.image} alt={dest.title} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '800', color: 'var(--color-text-primary)' }}>{dest.title}</h4>
              <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{dest.location}</p>
              <span style={{ 
                fontSize: '11px', padding: '4px 10px', 
                background: 'rgba(184, 147, 90, 0.08)', 
                border: '1px solid rgba(184, 147, 90, 0.15)',
                borderRadius: '6px', 
                color: 'var(--color-text-primary)', 
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Nearby
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
