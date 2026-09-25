import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Sparkles, SlidersHorizontal, X } from 'lucide-react';

const FILTER_OPTIONS = {
  regions: ['India', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Middle East', 'Africa'],
  travelStyles: ['Adventure', 'Relaxation', 'Luxury', 'Budget-friendly', 'Solo', 'Couple', 'Family', 'Friends', 'Backpacking', 'Romantic', 'Cultural', 'Food & Culinary', 'Nature', 'Spiritual', 'Photography'],
  budget: ['Economy', 'Moderate', 'Premium', 'Luxury'],
  duration: ['1–2 days', '3–5 days', '5–7 days', '1–2 weeks', '2+ weeks'],
  bestTime: ['Summer', 'Monsoon', 'Winter', 'Spring', 'Autumn', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  activities: ['Beaches', 'Hiking', 'Trekking', 'Museums', 'Nightlife', 'Shopping', 'Food', 'Historical Places', 'Wildlife', 'Water Sports', 'Photography', 'Camping', 'Temples', 'Art & Culture'],
  weather: ['Sunny', 'Cool', 'Warm', 'Rainy', 'Snow', 'Pleasant'],
  distance: ['Nearby', '<100 km', '<300 km', '<500 km', 'Anywhere'],
  rating: ['4.5+', '4.0+', '3.5+']
};

function FilterDropdown({ label, filterKey, options, activeFilters, onToggleFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeCount = activeFilters[filterKey]?.length || 0;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: activeCount > 0 ? 'var(--color-gold)' : 'white',
          color: activeCount > 0 ? 'var(--color-ink)' : 'var(--color-ink)',
          border: '1.5px solid',
          borderColor: activeCount > 0 ? 'var(--color-gold)' : 'var(--color-border)',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'all 0.2s'
        }}
        className="hover:border-ink"
      >
        {label}
        {activeCount > 0 && <span style={{ background: 'var(--color-ink)', color: 'var(--color-gold)', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>{activeCount}</span>}
        <ChevronDown size={16} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: '8px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-lg)',
          width: '240px',
          maxHeight: '320px',
          overflowY: 'auto',
          zIndex: 50,
          padding: '12px'
        }} className="hide-scrollbar">
          {options.map(option => {
            const isSelected = activeFilters[filterKey]?.includes(option);
            return (
              <div
                key={option}
                onClick={() => onToggleFilter(filterKey, option)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: isSelected ? 'var(--color-gold-muted)' : 'transparent',
                  fontWeight: isSelected ? 600 : 500,
                  color: isSelected ? 'var(--color-ink)' : 'var(--color-text-secondary)',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => { if (!isSelected) e.currentTarget.style.background = '#f9fafb' }}
                onMouseOut={(e) => { if (!isSelected) e.currentTarget.style.background = 'transparent' }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: isSelected ? 'none' : '2px solid #cbd5e1',
                  background: isSelected ? 'var(--color-gold)' : 'white',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}>
                  {isSelected && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                </div>
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function FilterBar({ filters, setFilters, aiRecommended, setAiRecommended }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFilter = (key, value) => {
    setFilters(prev => {
      const current = prev[key] || [];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  return (
    <div className="filter-bar-container hide-scrollbar" style={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      padding: '16px 40px',
      borderBottom: '1px solid var(--color-border-light)',
      background: 'var(--color-surface)',
      position: 'relative',
      zIndex: 50
    }}>

      {/* AI Recommended Toggle */}
      <button
        onClick={() => setAiRecommended(!aiRecommended)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 18px',
          background: aiRecommended ? 'var(--color-gold)' : 'white',
          color: aiRecommended ? 'var(--color-ink)' : 'var(--color-ink)',
          border: '1.5px solid',
          borderColor: aiRecommended ? 'var(--color-gold)' : 'var(--color-border)',
          borderRadius: '9999px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          marginRight: '8px',
          boxShadow: aiRecommended ? '0 4px 16px rgba(10,10,10,0.2)' : '0 2px 4px rgba(0,0,0,0.04)'
        }}
        className="hover:-translate-y-0.5"
      >
        <Sparkles size={16} fill={aiRecommended ? 'var(--color-ink)' : 'none'} color={aiRecommended ? 'var(--color-ink)' : 'var(--color-gold-dark)'} />
        Recommended for you
      </button>

      <div style={{ width: '1px', height: '24px', background: 'var(--color-border)', marginRight: '8px' }} />

      <FilterDropdown label="Destination" filterKey="regions" options={FILTER_OPTIONS.regions} activeFilters={filters} onToggleFilter={toggleFilter} />
      <FilterDropdown label="Travel Style" filterKey="travelStyles" options={FILTER_OPTIONS.travelStyles} activeFilters={filters} onToggleFilter={toggleFilter} />
      <FilterDropdown label="Budget" filterKey="budget" options={FILTER_OPTIONS.budget} activeFilters={filters} onToggleFilter={toggleFilter} />
      <FilterDropdown label="Duration" filterKey="duration" options={FILTER_OPTIONS.duration} activeFilters={filters} onToggleFilter={toggleFilter} />

      {/* More Filters Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
          background: 'var(--color-surface)', color: 'var(--color-text-primary)', border: '1.5px solid var(--color-border)',
          borderRadius: '9999px', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
          whiteSpace: 'nowrap', transition: 'all 0.2s'
        }}
        className="hover:border-ink"
      >
        <SlidersHorizontal size={16} />
        More Filters
      </button>

      {/* Secondary Filters Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15,23,42,0.4)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(4px)' }}>
          <div style={{ background: 'var(--color-surface)', width: '600px', maxWidth: '90%', maxHeight: '85vh', borderRadius: '24px', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>

            <div style={{ padding: '24px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>More Filters</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex' }}><X size={24} color="var(--color-text-secondary)" /></button>
            </div>

            <div style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '32px' }} className="custom-scrollbar">
              {['bestTime', 'activities', 'weather', 'distance', 'rating'].map(key => (
                <div key={key}>
                  <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600, textTransform: 'capitalize', color: 'var(--color-text-primary)' }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {FILTER_OPTIONS[key].map(opt => {
                      const isSelected = filters[key]?.includes(opt);
                      return (
                        <button
                          key={opt}
                          onClick={() => toggleFilter(key, opt)}
                          style={{
                            padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
                            background: isSelected ? 'var(--color-gold)' : 'white',
                            color: isSelected ? 'var(--color-ink)' : 'var(--color-ink)',
                            border: `1.5px solid ${isSelected ? 'var(--color-gold)' : 'var(--color-border)'}`
                          }}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '24px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'flex-end', gap: '12px', background: 'var(--color-surface)' }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'var(--color-ink)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className="hover:-translate-y-0.5 hover:shadow-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
