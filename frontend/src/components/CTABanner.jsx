import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="cta-section" style={{ background: 'var(--color-ink)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2 style={{ color: 'white' }}>Your next trip starts with one idea.</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '32px' }}>Join thousands of travelers planning smarter with TripMind.</p>
        <Link to="/register" className="btn btn-lg" style={{ background: 'var(--color-gold)', color: 'var(--color-text-primary)', border: 'none', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          Start Planning Free <ArrowRight size={16} style={{ marginLeft: '8px' }} />
        </Link>
      </div>
    </section>
  );
}
