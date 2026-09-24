import React from 'react';
import { Compass, Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Logo */}
        <a href="/" className="footer-logo">
          <div style={{
            width: 28,
            height: 28,
            background: 'var(--color-ink)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Plane size={15} color="white" strokeWidth={2.2} />
          </div>
          <span className="footer-logo-text">TripMind</span>
        </a>

        {/* Tagline */}
        <span className="footer-tagline">Think less. Travel better.</span>

        {/* Copyright */}
        <span className="footer-copy">© 2026 TripMind</span>
      </div>
    </footer>
  );
}
