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
      <aside className="hidden md:flex flex-col bg-black border-r border-white/10 h-screen overflow-y-auto z-20 relative">
        <Sidebar activeRoute="Saved Places" />
      </aside>

      <main className="flex flex-col h-screen overflow-y-auto overflow-x-hidden relative">
        <TopNav title="Saved Places" />

        <div className="flex-1 w-full max-w-[1300px] mx-auto p-4 sm:p-6 lg:p-10 pb-[100px] md:pb-10">

          {/* ── Gold Hero Banner ── */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 mb-6 sm:mb-8" style={{ background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)' }}>
            <div className="absolute -top-10 -right-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(184,147,90,0.25) 0%, transparent 70%)' }} />
            <div className="absolute -bottom-10 left-1/4 w-60 sm:w-96 h-60 sm:h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(184,147,90,0.12) 0%, transparent 70%)' }} />
            <div className="absolute top-5 right-1/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,174,120,0.15) 0%, transparent 70%)' }} />

            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-[var(--color-gold)]">
                    <Bookmark size={18} color="var(--color-ink)" fill="var(--color-ink)" />
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[var(--color-gold)]">TripMind</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white m-0 mb-2 tracking-tight leading-tight">
                  Saved Places
                </h1>
                <p className="m-0 text-sm sm:text-[15px] font-medium text-white/60">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlaces.map(place => (
                <div key={place.id} className="hover-lift flex flex-col bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-sm">
                  {/* Image */}
                  <div className="h-48 relative">
                    <img src={place.image} alt={place.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-[var(--color-surface)] rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                      <Bookmark size={16} fill="var(--color-ink)" color="var(--color-ink)" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="m-0 mb-3 text-lg font-bold text-[var(--color-text-primary)] leading-tight">
                      {place.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-3">
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
