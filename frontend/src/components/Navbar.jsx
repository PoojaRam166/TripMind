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
    <>
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
      </nav>
      {/* Mobile Menu Dropdown (Full Screen Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col h-[100dvh] overflow-y-auto">
          {/* Header inside overlay to close */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                  <Plane size={18} color="var(--color-ink)" strokeWidth={2.5} />
                </div>
                <span className="text-[17px] font-bold text-gray-900 tracking-tight">TripMind</span>
             </div>
             <button onClick={() => setIsMobileMenuOpen(false)} className="p-1">
                <X size={28} color="var(--color-ink)" />
             </button>
          </div>
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={`/#${link.id}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-gray-900 no-underline"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-gray-100 my-4" />
            <div className="flex flex-col gap-4">
              <Link 
                to="/login" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-2xl font-bold text-gray-900 no-underline"
              >
                Log In
              </Link>
              <Link 
                to="/register" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="bg-[var(--color-gold)] text-[var(--color-ink)] text-center rounded-full py-4 px-6 text-lg font-black shadow-[0_4px_12px_rgba(212,175,55,0.3)] no-underline mt-4 active:scale-95 transition-transform"
              >
                Start Planning Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
