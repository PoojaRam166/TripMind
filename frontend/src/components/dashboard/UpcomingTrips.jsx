import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Heart } from 'lucide-react';
import { tripService } from '../../services/tripService';

export default function UpcomingTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tripService.getUpcomingTrips().then(data => {
      // Add local state for interactions
      setTrips(data.map(t => ({ ...t, isFavorite: false })));
      setLoading(false);
    });
  }, []);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setTrips(trips.map(t => t.id === id ? { ...t, isFavorite: !t.isFavorite } : t));
  };

  const handleMoreClick = (e) => {
    e.stopPropagation();
    alert("More options clicked!");
  };

  if (loading) {
    return <div style={{ height: '240px', background: 'var(--color-surface-2)', borderRadius: '16px', animation: 'pulse-opacity 1.5s infinite' }} />;
  }

  if (trips.length === 0) return null;

  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: 0 }}>Your upcoming trips</h3>
        <a href="#" className="btn-view-all">
          View all <span>&rarr;</span>
        </a>
      </div>

      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '32px', paddingTop: '16px', margin: '-16px 0 -32px 0' }} className="hide-scrollbar">
        {trips.map(trip => (
          <div key={trip.id} className="hover-lift group cursor-pointer" style={{ 
            minWidth: '340px', 
            background: 'var(--color-surface)', 
            borderRadius: '20px', 
            overflow: 'hidden',
            border: '1px solid var(--color-border-light)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease'
          }}>
            <div className="image-zoom-container" style={{ height: '160px', position: 'relative' }}>
              <img src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
              <div style={{ 
                position: 'absolute', 
                top: '12px', 
                left: '12px', 
                background: 'rgba(255, 255, 255, 0.95)', 
                backdropFilter: 'blur(4px)',
                padding: '6px 12px', 
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                zIndex: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
                <span style={{ color: 'var(--color-gold-dark)', marginRight: '6px' }}>•</span>
                {trip.status} {trip.progress}%
              </div>

              <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '8px', zIndex: 2 }}>
                <button 
                  onClick={(e) => toggleFavorite(e, trip.id)}
                  style={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: trip.isFavorite ? '#EF4444' : 'var(--color-ink)' }}
                >
                  <Heart size={16} fill={trip.isFavorite ? '#EF4444' : 'none'} />
                </button>
                <button 
                  onClick={handleMoreClick}
                  style={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-text-primary)' }}
                >
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
            
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <p style={{ margin: '0 0 4px 0', fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{trip.location}</p>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{trip.title}</h4>
              
              <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-secondary)', fontSize: '13px', marginBottom: '20px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  🗓️ {trip.dates}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  👥 {trip.travelers} travelers
                </span>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>
                  Continue Planning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
