import React, { useState } from 'react';
import { MapPin, X, Star } from 'lucide-react';

// Mock coordinates for random placement
const getRandomPos = () => ({
  top: `${10 + Math.random() * 80}%`,
  left: `${10 + Math.random() * 80}%`
});

export default function MapView({ destinations, onSave }) {
  const [selectedDest, setSelectedDest] = useState(null);
  
  // Assign stable random positions to destinations for the mock map
  const [markers] = useState(() => 
    destinations.map(d => ({ ...d, pos: getRandomPos() }))
  );

  return (
    <div style={{ padding: '0 40px 40px', position: 'relative' }}>
      
      {/* Mock Map Container */}
      <div style={{ 
        height: '600px', 
        width: '100%', 
        borderRadius: '24px', 
        overflow: 'hidden', 
        position: 'relative',
        background: '#e5e7eb', // Fallback color
        border: '1px solid var(--color-border)'
      }}>
        
        {/* Real OSM Map Background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <iframe 
            title="Real Map Background"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-10,35,40,65&layer=mapnik" 
            style={{ border: 0, pointerEvents: 'none', filter: 'contrast(0.95) brightness(1.05)' }}
          />
        </div>

        {/* Dark overlay to make markers pop slightly */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.2)' }} />

        {/* Map Markers */}
        {markers.map(marker => (
          <div 
            key={marker.id}
            onClick={() => setSelectedDest(marker)}
            style={{ 
              position: 'absolute', 
              top: marker.pos.top, 
              left: marker.pos.left, 
              transform: 'translate(-50%, -100%)',
              cursor: 'pointer',
              zIndex: selectedDest?.id === marker.id ? 20 : 10
            }}
            className="group"
          >
            <div style={{ 
              background: selectedDest?.id === marker.id ? 'var(--color-gold)' : 'var(--color-ink)', 
              color: 'white', 
              padding: '6px 12px', 
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }} className="hover:scale-105">
              <MapPin size={14} />
              {marker.priceRange.split(' ')[0]} {/* Show starting price */}
            </div>
            {/* Map pin triangle */}
            <div style={{ 
              width: 0, 
              height: 0, 
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: `6px solid ${selectedDest?.id === marker.id ? 'var(--color-gold)' : 'var(--color-ink)'}`,
              margin: '0 auto',
              transition: 'border-color 0.2s'
            }} />
          </div>
        ))}

        {/* Selected Destination Popup */}
        {selectedDest && (
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--color-surface)',
            borderRadius: '16px',
            padding: '16px',
            width: '320px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 30,
            display: 'flex',
            gap: '16px',
            animation: 'slide-up 0.3s ease forwards'
          }}>
            <button 
              onClick={() => setSelectedDest(null)}
              style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}
            >
              <X size={14} />
            </button>

            <img src={selectedDest.image} alt={selectedDest.title} style={{ width: '100px', height: '100px', borderRadius: '12px', objectFit: 'cover' }} />
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{selectedDest.title}</h4>
              <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: 'var(--color-text-secondary)' }}>{selectedDest.location}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'auto' }}>
                <Star size={12} fill="var(--color-gold)" color="var(--color-gold)" />
                {selectedDest.rating} ({selectedDest.reviews})
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <button 
                  onClick={() => onSave(selectedDest.id)}
                  style={{ flex: 1, padding: '6px', borderRadius: '6px', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}
                >
                  {selectedDest.saved ? 'Saved' : 'Save'}
                </button>
                <button style={{ flex: 1, padding: '6px', borderRadius: '6px', background: 'var(--color-ink)', color: 'white', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
                  Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder Watermark */}
        <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
          Interactive Map Ready
        </div>

      </div>
    </div>
  );
}
