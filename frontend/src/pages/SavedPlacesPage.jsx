import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark, Sparkles, Plus, Star, Heart, Map } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';
import EmptyState from '../components/EmptyState';
import { useToast } from '../components/ToastContext';

// Mock data based on the user's screenshot
const SAVED_PLACES = [
  {
    id: 1,
    title: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    category: 'Destinations',
    rating: 4.9,
    collection: 'Dream Destinations'
  },
  {
    id: 2,
    title: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=80',
    category: 'Destinations',
    rating: 4.8,
    collection: 'Dream Destinations'
  },
  {
    id: 3,
    title: 'Colosseum, Rome',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80',
    category: 'Activities',
    rating: 4.7,
    collection: 'Places for Later'
  },
  {
    id: 4,
    title: 'Maldives Water Villas',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80',
    category: 'Hotels',
    rating: 4.9,
    collection: 'Dream Destinations'
  },
  {
    id: 5,
    title: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
    category: 'Destinations',
    rating: 4.9,
    collection: 'Dream Destinations'
  },
  {
    id: 6,
    title: 'Goa Beach Resort',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&auto=format&fit=crop&q=80',
    category: 'Hotels',
    rating: 4.6,
    collection: 'Weekend Ideas'
  },
  {
    id: 7,
    title: 'Nandi Hills Sunrise',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&auto=format&fit=crop&q=80',
    category: 'Activities',
    rating: 4.5,
    collection: 'Weekend Ideas'
  },
  {
    id: 8,
    title: 'Tsukiji Fish Market',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop&q=80',
    category: 'Restaurants',
    rating: 4.8,
    collection: 'Food Places'
  }
];

const COLLECTIONS = [
  { name: 'All Collections', count: 8 },
  { name: 'Dream Destinations', count: 4 },
  { name: 'Food Places', count: 1 },
  { name: 'Weekend Ideas', count: 2 },
  { name: 'Places for Later', count: 1 }
];

const CATEGORIES = ['All', 'Destinations', 'Hotels', 'Restaurants', 'Activities', 'Cafes'];

export default function SavedPlacesPage() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [activeCollection, setActiveCollection] = useState('All Collections');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter logic
  const filteredPlaces = SAVED_PLACES.filter(place => {
    const matchesCollection = activeCollection === 'All Collections' || place.collection === activeCollection;
    const matchesCategory = activeCategory === 'All' || place.category === activeCategory;
    return matchesCollection && matchesCategory;
  });

  return (
    <div className="dashboard-layout page-transition">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Saved Places" />
      </aside>

      <main className="dashboard-main">
        <TopNav title="Saved Places" />

        <div className="dashboard-content" style={{ maxWidth: '1300px', margin: '0 auto', width: '100%', padding: '32px 48px 80px' }}>

          {/* ── Gold Hero Banner ── */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)',
            padding: '48px 48px 56px',
            margin: '0 0 32px 0',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '30%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '20px', right: '20%', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,174,120,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Bookmark size={18} color="var(--color-ink)" fill="var(--color-ink)" />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>TripMind</span>
                </div>
                <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: 'white', margin: '0 0 8px', letterSpacing: '-1px', lineHeight: 1.1 }}>
                  Saved Places
                </h1>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                  {SAVED_PLACES.length} places saved
                </p>
              </div>
            </div>
          </div>

          {/* ── Filters Section ── */}
          <div style={{ marginBottom: '32px' }}>
            {/* Collections */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              {COLLECTIONS.map(col => {
                const isActive = activeCollection === col.name;
                return (
                  <button
                    key={col.name}
                    onClick={() => setActiveCollection(col.name)}
                    style={{
                      background: isActive ? 'var(--color-gold)' : 'white',
                      color: isActive ? 'var(--color-ink)' : 'var(--color-text-secondary)',
                      border: `1px solid ${isActive ? 'var(--color-gold)' : 'var(--color-border)'}`,
                      padding: '8px 16px',
                      borderRadius: '99px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {col.name} {col.count > 0 && <span style={{ opacity: 0.7, fontSize: '12px', fontWeight: 500 }}>({col.count})</span>}
                  </button>
                );
              })}
            </div>

            {/* Categories */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: isActive ? 'var(--color-surface-2)' : 'transparent',
                      color: isActive ? 'var(--color-ink)' : 'var(--color-text-secondary)',
                      border: `1px solid ${isActive ? 'var(--color-gold)' : 'var(--color-border-light)'}`,
                      padding: '6px 14px',
                      borderRadius: '99px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Grid Section ── */}
          {filteredPlaces.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {filteredPlaces.map(place => (
                <div key={place.id} className="hover-lift" style={{
                  background: 'var(--color-surface)',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {/* Image */}
                  <div style={{ height: '180px', position: 'relative' }}>
                    <img src={place.image} alt={place.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', top: '12px', right: '12px',
                      background: 'var(--color-surface)', borderRadius: '50%', width: '32px', height: '32px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      <Bookmark size={16} fill="var(--color-ink)" color="var(--color-ink)" />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
                      {place.title}
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span style={{
                        background: 'var(--color-gold-muted)',
                        color: 'var(--color-gold-dark)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 700
                      }}>
                        {place.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-secondary)', fontSize: '13px', fontWeight: 600 }}>
                        <Star size={14} fill="var(--color-gold)" color="var(--color-gold)" />
                        {place.rating}
                      </div>
                    </div>

                    <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      {place.collection}
                    </p>

                    <button 
                      onClick={() => addToast(`${place.title} added to your trip!`)}
                      className="btn btn-champ hover-lift" style={{
                      marginTop: 'auto',
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                      fontWeight: 'bold'
                    }}>
                      <Plus size={16} /> Add to Trip
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState 
              icon={Map}
              title="No collections yet? Let's fix that."
              description="Save travel inspo to a themed collection so it's easy to find when it's time to plan."
              actionLabel="Create a collection"
              actionLink="/explore"
            />
          )}

        </div>
      </main>
    </div>
  );
}
