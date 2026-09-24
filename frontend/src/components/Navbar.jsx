import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Explore', id: 'explore' },
  { label: 'Features', id: 'chat' },
  { label: 'Recommendations', id: 'personalized' },
  { label: 'Destinations', id: 'destinations' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none' }}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <div style={{ width: 32, height: 32, background: 'var(--color-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Plane size={18} color="var(--color-ink)" strokeWidth={2.5} />
          </div>
          <span className="navbar-logo-text">TripMind</span>
        </a>

        {/* Nav Links */}
        <ul className="navbar-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={`/#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/login" className="btn btn-outline-gold btn-sm hide-on-mobile" style={{ textDecoration: 'none' }}>Login</Link>
          <Link to="/register" className="btn btn-primary btn-sm hide-on-mobile" style={{ textDecoration: 'none' }}>Start Planning</Link>
          
          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', marginLeft: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isMobileMenuOpen ? <X size={28} color="var(--color-ink)" /> : <Menu size={28} color="var(--color-ink)" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-dropdown" style={{ 
          position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--color-surface)', 
          borderBottom: '1px solid var(--color-border)', padding: '16px 24px', display: 'flex', 
          flexDirection: 'column', gap: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', zIndex: 1000
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={`/#${link.id}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ padding: '8px 0', fontSize: '18px', fontWeight: 600, color: 'var(--color-text-primary)', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ height: '1px', background: 'var(--color-border)', margin: '8px 0' }} />
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '8px 0', fontSize: '18px', fontWeight: 600, color: 'var(--color-text-primary)', textDecoration: 'none' }}>Log In</Link>
          <Link to="/register" className="btn hover-lift" onClick={() => setIsMobileMenuOpen(false)} style={{ textAlign: 'center', marginTop: '8px', textDecoration: 'none', background: 'var(--color-gold)', color: 'var(--color-ink)', borderRadius: '999px', padding: '14px', fontSize: '16px', fontWeight: 800, boxShadow: '0 4px 12px rgba(212,175,55,0.3)', border: 'none' }}>Start Planning Free</Link>
        </div>
      )}
    </nav>
  );
}
