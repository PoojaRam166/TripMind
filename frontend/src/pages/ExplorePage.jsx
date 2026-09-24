import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';
import ExploreHero from '../components/explore/ExploreHero';
import FilterBar from '../components/explore/FilterBar';
import ActiveFilterChips from '../components/explore/ActiveFilterChips';
import DestinationGrid from '../components/explore/DestinationGrid';
import MapView from '../components/explore/MapView';
import TrendingSection from '../components/explore/TrendingSection';
import NearbySection from '../components/explore/NearbySection';
import PersonalizedSection from '../components/explore/PersonalizedSection';
import AIExploreSection from '../components/explore/AIExploreSection';
import { exploreService } from '../services/exploreService';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [aiRecommended, setAiRecommended] = useState(false);
  const [sort, setSort] = useState('Recommended');
  const [viewMode, setViewMode] = useState('grid');

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load and filter destinations
  useEffect(() => {
    setLoading(true);
    exploreService.filterDestinations(filters, searchQuery, sort).then(data => {
      // If AI recommended is on, limit or sort based on AI logic (Mock: just reverse or limit)
      let finalData = data;
      if (aiRecommended) {
        finalData = finalData.slice(0, 3);
      }
      setDestinations(finalData);
      setLoading(false);
    });
  }, [filters, searchQuery, sort, aiRecommended]);

  const handleClearFilters = () => {
    setFilters({});
    setAiRecommended(false);
    setSearchQuery('');
  };

  const handleSave = (id) => {
    setDestinations(prev => prev.map(d => d.id === id ? { ...d, saved: !d.saved } : d));
  };

  return (
    <div className="dashboard-layout">
      {/* Fixed Left Sidebar */}
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Explore" />
      </aside>

      {/* Main scrollable content area */}
      <main className="dashboard-main" style={{ background: 'var(--color-surface)' }}>
        <TopNav />

        <ExploreHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* AI Explore Section moved to top and shown always unless searching */}
        {!searchQuery && Object.keys(filters).length === 0 && !aiRecommended && (
          <AIExploreSection />
        )}

        <div style={{ position: 'sticky', top: 0, zIndex: 40 }}>
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            aiRecommended={aiRecommended}
            setAiRecommended={setAiRecommended}
          />
          <ActiveFilterChips
            filters={filters}
            setFilters={setFilters}
            onClearAll={handleClearFilters}
          />
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', paddingBottom: '60px' }}>

          {loading ? (
            <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="animate-pulse" style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>Loading destinations...</div>
            </div>
          ) : viewMode === 'grid' ? (
            <DestinationGrid
              destinations={destinations}
              sort={sort}
              setSort={setSort}
              viewMode={viewMode}
              setViewMode={setViewMode}
              onSave={handleSave}
              onClearFilters={handleClearFilters}
            />
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 40px 24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Map View</h2>
                <button onClick={() => setViewMode('grid')} className="btn btn-outline-gold btn-sm">Close Map</button>
              </div>
              <MapView destinations={destinations} onSave={handleSave} />
            </>
          )}

          {/* Only show discovery sections if no heavy filters are applied */}
          {!searchQuery && Object.keys(filters).length === 0 && !aiRecommended && (
            <>
              <TrendingSection />
              <PersonalizedSection />
              <NearbySection />
            </>
          )}

        </div>
      </main>
    </div>
  );
}
