import React, { useState, useEffect } from 'react';
import { exploreService } from '../../services/exploreService';
import { Flame } from 'lucide-react';

export default function TrendingSection() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    exploreService.getTrendingDestinations().then(data => setTrending(data));
  }, []);

  if (trending.length === 0) return null;

  return (
    <div className="px-4 md:px-10 pb-12 md:pb-[60px]">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 m-0 mb-6 flex items-center gap-2">
        Trending now <Flame size={24} className="text-[var(--color-gold)] fill-[var(--color-gold)] shrink-0" />
      </h3>
      
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '16px' }} className="hide-scrollbar">
        {trending.map(dest => (
          <div key={dest.id} className="group cursor-pointer hover-lift" style={{ minWidth: '180px' }}>
            <div style={{ width: '180px', height: '240px', borderRadius: '16px', overflow: 'hidden', position: 'relative', marginBottom: '12px' }}>
              <img src={dest.image} alt={dest.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-110" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                <h4 style={{ margin: 0, color: 'white', fontSize: '16px', fontWeight: 'bold' }}>{dest.location}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
