import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { Link } from 'react-router-dom';
import TopNav from '../components/dashboard/TopNav';
import AIHero from '../components/dashboard/AIHero';
import UpcomingTrips from '../components/dashboard/UpcomingTrips';
import ContinuePlanning from '../components/dashboard/ContinuePlanning';

import QuickActions from '../components/dashboard/QuickActions';
import RecentActivity from '../components/dashboard/RecentActivity';
import { tripService } from '../services/tripService';

export default function HomePage() {
  const [hasTrips, setHasTrips] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we check if the user has any trips to determine the empty state
    tripService.getUpcomingTrips().then(trips => {
      setHasTrips(trips.length > 0);
      setLoading(false);
    });
  }, []);

  return (
    <div className="dashboard-layout">
      {/* Fixed Left Sidebar */}
      <aside className="dashboard-sidebar">
        <Sidebar />
      </aside>

      {/* Main scrollable content area */}
      <main className="dashboard-main">
        <TopNav />

        <div className="dashboard-content" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>

          <div className="animate-fade-in-up">
            {loading ? <div style={{ height: '280px' }} /> : <AIHero />}
          </div>

          {!loading && hasTrips && (
            <>
              <div className="animate-fade-in-up delay-100">
                <UpcomingTrips />
              </div>

              <div className="animate-fade-in-up delay-200" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '40px', marginBottom: '40px' }}>
                <ContinuePlanning />
                <RecentActivity />
              </div>
            </>
          )}

          {!loading && !hasTrips && (
            <div className="animate-fade-in-up delay-100" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Your next adventure starts here.</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>Use the AI assistant above to start planning.</p>
            </div>
          )}

          <div className="animate-fade-in-up delay-300">
            <QuickActions />

            <div style={{ marginTop: '40px', padding: '40px', background: 'var(--color-surface-2)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-primary)', marginBottom: '16px' }}>Ready for a new adventure?</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', fontSize: '16px' }}>Discover new places, experiences, and destinations tailored to your style.</p>
              <Link to="/explore" className="btn btn-champ" style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 32px', borderRadius: '9999px', fontSize: '16px', fontWeight: 'bold' }}>
                Explore destinations &rarr;
              </Link>
            </div>
          </div>



        </div>
      </main>
    </div>
  );
}
