import React, { useState, useRef, useEffect } from 'react';
import DestinationCard from './DestinationCard';
import { LayoutGrid, Map as MapIcon, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function DestinationGrid({ destinations, sort, setSort, viewMode, setViewMode, onSave, onClearFilters }) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortOptions = ["Recommended", "Popular", "Rating"];

  return (
    <div className="destination-grid-container" style={{ padding: '20px 40px 40px' }}>
      
      {/* Header and Controls */}
      <div className="destination-grid-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid var(--color-border-light)' }}>
        <div>
          <h2 className="explore-hero-title" style={{ fontSize: '32px', fontWeight: '800', color: 'var(--color-text-primary)', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>Discover places</h2>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '15px', fontWeight: 500 }}>
            Showing <span style={{ color: 'var(--color-text-primary)', fontWeight: 700 }}>{destinations.length}</span> {destinations.length === 1 ? 'place' : 'places'} that match your style
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          {/* Custom Sort Dropdown */}
          <div ref={sortRef} style={{ position: 'relative' }}>
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', 
                background: 'var(--color-surface)', border: '1px solid var(--color-border)', 
                borderRadius: '9999px', padding: '8px 16px',
                cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: isSortOpen ? 'var(--shadow-sm)' : 'none',
                borderColor: isSortOpen ? 'var(--color-gold)' : 'var(--color-border)'
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Sort by:</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)' }}>{sort}</span>
              <ChevronDown size={14} color="var(--color-text-secondary)" style={{ transform: isSortOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {isSortOpen && (
              <div style={{
                position: 'absolute', top: '100%', right: 0, marginTop: '8px',
                background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: '16px', boxShadow: 'var(--shadow-lg)',
                padding: '8px', width: '200px', zIndex: 50
              }}>
                {sortOptions.map(option => (
                  <div 
                    key={option}
                    onClick={() => { setSort(option); setIsSortOpen(false); }}
                    style={{
                      padding: '10px 12px', borderRadius: '8px', cursor: 'pointer',
                      fontSize: '14px', fontWeight: sort === option ? 700 : 500,
                      color: sort === option ? 'var(--color-ink)' : 'var(--color-text-secondary)',
                      background: sort === option ? 'var(--color-surface-2)' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      transition: 'background 0.2s'
                    }}
                    className="hover:bg-gray-50"
                  >
                    {option}
                    {sort === option && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }} />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* View Toggle */}
          <div style={{ display: 'flex', background: 'var(--color-surface-2)', padding: '4px', borderRadius: '9999px', border: '1px solid var(--color-border)' }}>
            <button 
              onClick={() => setViewMode('grid')}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '6px', 
                padding: '8px 16px', borderRadius: '9999px', border: 'none', cursor: 'pointer',
                background: viewMode === 'grid' ? 'white' : 'transparent',
                color: viewMode === 'grid' ? 'var(--color-ink)' : 'var(--color-text-muted)',
                boxShadow: viewMode === 'grid' ? 'var(--shadow-sm)' : 'none',
                fontWeight: viewMode === 'grid' ? 700 : 600,
                fontSize: '13px',
                transition: 'all 0.2s'
              }}
            >
              <LayoutGrid size={16} /> Grid
            </button>
            <button 
              onClick={() => setViewMode('map')}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '6px', 
                padding: '8px 16px', borderRadius: '9999px', border: 'none', cursor: 'pointer',
                background: viewMode === 'map' ? 'white' : 'transparent',
                color: viewMode === 'map' ? 'var(--color-ink)' : 'var(--color-text-muted)',
                boxShadow: viewMode === 'map' ? 'var(--shadow-sm)' : 'none',
                fontWeight: viewMode === 'map' ? 700 : 600,
                fontSize: '13px',
                transition: 'all 0.2s'
              }}
            >
              <MapIcon size={16} /> Map
            </button>
          </div>

        </div>
      </div>

      {/* Grid Content */}
      {destinations.length === 0 ? (
        <div style={{ padding: '60px 0', textAlign: 'center', background: 'var(--color-surface)', borderRadius: '24px', border: '1px dashed var(--color-border)' }}>
          <SlidersHorizontal size={48} color="var(--color-text-muted)" style={{ margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '8px' }}>No destinations found</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>Try adjusting your filters to find more places.</p>
          <button onClick={onClearFilters} className="btn btn-outline-gold btn-md">
            Clear all filters
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, ), ))', gap: '24px' }}>
          {destinations.map(dest => (
            <DestinationCard key={dest.id} dest={dest} onSave={onSave} />
          ))}
        </div>
      )}

    </div>
  );
}
