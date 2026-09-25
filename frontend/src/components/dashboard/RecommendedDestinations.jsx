import React, { useState, useEffect } from 'react';
import { Bookmark, MapPin } from 'lucide-react';
import { destinationService } from '../../services/destinationService';

const CATEGORIES = ['All', 'Trending', 'Beach', 'Adventure', 'Food & Culture', 'Nature', 'Weekend', 'Budget-friendly', 'India', 'International'];

export default function ExploreDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Trending');

  useEffect(() => {
    destinationService.getDestinations().then(data => {
      setDestinations(data);
      setLoading(false);
    });
  }, []);

  const toggleSave = (e, dest) => {
    e.stopPropagation();
    const isSaved = !dest.saved;
    setDestinations(destinations.map(d => 
      d.id === dest.id ? { ...d, saved: isSaved } : d
    ));
  };

  if (loading) {
    return <div style={{ height: '300px', background: 'var(--color-surface-2)', borderRadius: '16px', animation: 'pulse-opacity 1.5s infinite' }} />;
  }

  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.categories.includes(activeCategory)).slice(0, 4);

  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: 0 }}>Explore destinations</h3>
        <button className="btn-view-all">
          View all <span>&rarr;</span>
        </button>
      </div>

      {/* Category Filters */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '16px', height: '60px', alignItems: 'center' }} className="hide-scrollbar">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); }}
            style={{
              flexShrink: 0,
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              border: activeCategory === cat ? '1px solid var(--color-ink)' : '1px solid var(--color-border)',
              background: activeCategory === cat ? 'var(--color-ink)' : 'white',
              color: activeCategory === cat ? 'white' : 'var(--color-text-secondary)',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, ), ))', gap: '20px' }}>
        {filteredDestinations.length === 0 ? (
          <p style={{ color: 'var(--color-text-secondary)' }}>No destinations found for this category.</p>
        ) : (
          filteredDestinations.map(dest => (
            <div key={dest.id} className="hover-lift group" style={{ 
              background: 'var(--color-surface)', 
              borderRadius: '16px', 
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer'
            }}>
              <div className="image-zoom-container" style={{ height: '140px', position: 'relative' }}>
                <img src={dest.image} alt={dest.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button 
                  onClick={(e) => toggleSave(e, dest)}
                  style={{ 
                    position: 'absolute', 
                    top: '12px', 
                    right: '12px', 
                    background: 'rgba(255,255,255,0.9)', 
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: dest.saved ? 'var(--color-gold)' : 'var(--color-ink)',
                    transition: 'transform 0.2s ease',
                    zIndex: 2
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Bookmark size={16} fill={dest.saved ? 'var(--color-gold)' : 'none'} />
                </button>
              </div>
              
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{dest.title}</h4>
                <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} /> {dest.location}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--color-gold)' }}>{dest.price}</span>
                  <button onClick={(e) => { e.stopPropagation(); }} className="btn btn-primary" style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '12px' }}>
                    Plan Trip
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
