import React, { useState } from 'react';
import { Camera, MapPin, Heart, Plus, Calendar } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';

// Mock data for memories
const MEMORIES = [
  {
    id: 1,
    location: 'Bali, Indonesia',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80',
    likes: 12,
    size: 'large' // Used for masonry effect
  },
  {
    id: 2,
    location: 'Paris, France',
    date: 'June 2023',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=80',
    likes: 8,
    size: 'small'
  },
  {
    id: 3,
    location: 'Swiss Alps',
    date: 'December 2022',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
    likes: 24,
    size: 'medium'
  },
  {
    id: 4,
    location: 'Colosseum, Rome',
    date: 'September 2022',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80',
    likes: 15,
    size: 'small'
  },
  {
    id: 5,
    location: 'Goa Beach',
    date: 'January 2024',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
    likes: 31,
    size: 'large'
  },
  {
    id: 6,
    location: 'Kyoto, Japan',
    date: 'April 2023',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80',
    likes: 19,
    size: 'medium'
  },
  {
    id: 7,
    location: 'Grand Canyon, USA',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&auto=format&fit=crop&q=80',
    likes: 42,
    size: 'small'
  }
];

const YEARS = ['All Time', '2024', '2023', '2022'];

export default function MemoriesPage() {
  const [activeYear, setActiveYear] = useState('All Time');
  const [likedIds, setLikedIds] = useState(new Set());

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] h-screen w-screen overflow-hidden bg-[var(--color-surface-2)] relative">
      <aside className="hidden md:flex flex-col bg-black border-r border-white/10 h-screen overflow-y-auto z-20 relative">
        <Sidebar activeRoute="Memories" />
      </aside>

      <main className="flex flex-col h-screen overflow-y-auto overflow-x-hidden relative">
        <TopNav title="Memories" />

        <div className="flex-1 w-full max-w-[1800px] mx-auto p-4 sm:p-6 lg:p-10 pb-[100px] md:pb-10">
          
          {/* ── Hero Banner ── */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 mb-6 sm:mb-10 flex flex-col md:flex-row items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.1)] gap-6" style={{ background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Camera size={32} color="var(--color-ink)" fill="var(--color-ink)" />
              </div>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.5px' }}>
                  Travel Memories
                </h1>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Relive your favorite moments from past adventures.
                </p>
              </div>
            </div>
            
            <button className="btn btn-champ btn-md hover-lift" style={{ position: 'relative', zIndex: 1, padding: '12px 24px', fontSize: '14px', borderRadius: '99px' }}>
              <Plus size={18} /> Add Memory
            </button>
          </div>

          {/* ── Filters ── */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }} className="hide-scrollbar">
            {YEARS.map(year => {
              const isActive = activeYear === year;
              return (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  style={{
                    background: isActive ? 'var(--color-gold)' : 'white',
                    color: isActive ? 'var(--color-ink)' : 'var(--color-text-secondary)',
                    border: `1px solid ${isActive ? 'var(--color-gold)' : 'var(--color-border)'}`,
                    padding: '10px 20px',
                    borderRadius: '99px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Calendar size={16} /> {year}
                </button>
              );
            })}
          </div>

          {/* ── Masonry Grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr)',
            gridAutoRows: '200px',
            gap: '24px'
          }}>
            {MEMORIES.filter(m => activeYear === 'All Time' || m.date.includes(activeYear)).map((memory) => {
              // Determine span based on mock 'size' for a masonry effect
              const rowSpan = memory.size === 'large' ? 2 : memory.size === 'medium' ? 1.5 : 1;
              const gridRowEnd = `span ${memory.size === 'large' ? 2 : 1}`;
              const isLiked = likedIds.has(memory.id);

              return (
                <div 
                  key={memory.id} 
                  className="group cursor-pointer"
                  style={{ 
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    gridRowEnd: gridRowEnd,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img 
                    src={memory.image} 
                    alt={memory.location} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Content */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    padding: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                  }}>
                    <div>
                      <h3 style={{ color: 'white', margin: '0 0 6px 0', fontSize: '18px', fontWeight: 'bold' }}>
                        {memory.location}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.8)', fontSize: '13px', fontWeight: 500 }}>
                        <MapPin size={14} /> {memory.date}
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => toggleLike(e, memory.id)}
                      style={{
                        background: isLiked ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                        border: `1px solid ${isLiked ? 'var(--color-gold)' : 'rgba(255,255,255,0.3)'}`,
                        color: isLiked ? 'var(--color-ink)' : 'white',
                        width: '36px', height: '36px',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseOver={e => { 
                        if (!isLiked) {
                          e.currentTarget.style.background = 'var(--color-gold)'; 
                          e.currentTarget.style.color = 'var(--color-ink)'; 
                          e.currentTarget.style.borderColor = 'var(--color-gold)'; 
                        }
                      }}
                      onMouseOut={e => { 
                        if (!isLiked) {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; 
                          e.currentTarget.style.color = 'white'; 
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; 
                        }
                      }}
                    >
                      <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
}
