import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, Briefcase } from 'lucide-react';
import { searchService } from '../../services/searchService';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.trim()) {
        setIsSearching(true);
        const res = await searchService.search(query);
        setResults(res);
        setIsSearching(false);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '10vh'
    }}>
      <div style={{
        background: 'var(--color-surface)',
        width: '100%',
        maxWidth: '600px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        
        {/* Header / Input */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '16px', borderBottom: '1px solid var(--color-border)' }}>
          <Search size={20} color="var(--color-text-secondary)" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, trips, places..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              padding: '0 12px',
              color: 'var(--color-text-primary)'
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
            <X size={20} color="var(--color-text-secondary)" />
          </button>
        </div>

        {/* Results */}
        <div style={{ padding: '16px', minHeight: '100px', maxHeight: '60vh', overflowY: 'auto' }}>
          {!query && (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              Try searching for "Paris" or "Goa"
            </div>
          )}
          
          {isSearching && query && (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              Searching...
            </div>
          )}

          {!isSearching && query && results.length === 0 && (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              No results found for "{query}"
            </div>
          )}

          {!isSearching && results.map(res => (
            <div key={res.id} className="hover-lift" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px', 
              padding: '12px', 
              borderRadius: '12px',
              cursor: 'pointer',
              marginBottom: '8px'
            }}>
              <div style={{ 
                width: '40px', height: '40px', 
                borderRadius: '8px', 
                background: 'var(--color-surface-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {res.type === 'trip' ? <Briefcase size={20} color="var(--color-ink)"/> : <MapPin size={20} color="var(--color-ink)"/>}
              </div>
              <div>
                <h4 style={{ margin: 0, fontWeight: 600, color: 'var(--color-text-primary)' }}>{res.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)' }}>{res.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
