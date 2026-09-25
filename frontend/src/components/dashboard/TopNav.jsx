import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Home, Compass, MapPin, Briefcase, Settings, User, LogOut, Bookmark, Menu, X, Plane } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';
import Sidebar from './Sidebar';

export default function TopNav({ title: propTitle }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Format the title based on the route or use prop
  let title = propTitle || 'Home';
  if (!propTitle) {
    if (location.pathname.includes('/explore')) title = 'Explore';
    if (location.pathname.includes('/trips')) title = 'My Trips';
  }

  const mobileNavItems = [
    { label: 'Home',    icon: <Home size={20} />,      path: '/home' },
    { label: 'Explore', icon: <Compass size={20} />,   path: '/explore' },
    { label: 'Plan',    icon: <MapPin size={20} />,    path: '/plan' },
    { label: 'Trips',   icon: <Briefcase size={20} />, path: '/trips' },
    { label: 'Menu',    icon: <Menu size={20} />,      path: '#menu' },
  ];

  const currentPath = location.pathname;

  return (
    <>
      {/* ── Desktop / Tablet Top Navigation ── */}
      <div
        className="topnav-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 40px',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <div style={{ flex: 1, maxWidth: '600px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Mobile Logo (hidden on desktop) */}
          <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 28, height: 28, background: 'var(--color-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Plane size={16} color="var(--color-ink)" strokeWidth={2.5} />
            </div>
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, marginRight: '24px', color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>
            {title}
          </h2>

          {/* Search Bar — hidden on mobile */}
          <div
            onClick={() => setIsSearchOpen(true)}
            className="group hide-on-mobile"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              background: 'var(--color-surface)',
              border: '1.5px solid var(--color-border)',
              padding: '10px 18px',
              borderRadius: '9999px',
              gap: '10px',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-gold)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <Search size={18} color="var(--color-gold-dark)" />
            <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
              Search destinations, trips...
            </span>
          </div>
        </div>

        <div className="topnav-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            className="btn btn-champ btn-sm hide-on-mobile"
            style={{ padding: '10px 22px', borderRadius: '9999px', fontWeight: 700, letterSpacing: '0.3px' }}
          >
            + Plan a Trip
          </button>



          <button
            onClick={() => navigate('/notifications')}
            className="hover-lift"
            style={{
              position: 'relative',
              background: 'var(--color-surface-2)',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <Bell size={18} strokeWidth={2.5} />
            <span
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '8px',
                height: '8px',
                background: '#EF4444',
                borderRadius: '50%',
                border: '2px solid var(--color-surface-2)',
              }}
            />
          </button>

          <div style={{ position: 'relative' }} ref={profileRef}>
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="hover-lift"
              style={{
                width: '40px',
                height: '40px',
                background: 'var(--color-ink)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: 'white',
                cursor: 'pointer',
                border: '2px solid var(--color-gold)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              P
            </div>
            
            {isProfileOpen && (
              <div style={{ 
                position: 'absolute', top: 'calc(100% + 12px)', right: 0, 
                width: '240px', background: 'var(--color-surface)', borderRadius: '16px', 
                boxShadow: '0 12px 32px rgba(0,0,0,0.12)', border: '1px solid var(--color-border-light)',
                padding: '8px', zIndex: 100 
              }}>
                <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-light)', marginBottom: '8px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-text-primary)' }}>Poojitha Reddy</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>poojitha@example.com</div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <button onClick={() => navigate('/settings')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', borderRadius: '8px', background: 'transparent', border: 'none', width: '100%', textAlign: 'left', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)', cursor: 'pointer' }} className="hover:bg-gray-50">
                    <User size={16} /> My Profile
                  </button>
                  <button onClick={() => navigate('/settings')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', borderRadius: '8px', background: 'transparent', border: 'none', width: '100%', textAlign: 'left', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)', cursor: 'pointer' }} className="hover:bg-gray-50">
                    <Settings size={16} /> Settings
                  </button>
                </div>
                
                <div style={{ padding: '8px 0 0', marginTop: '8px', borderTop: '1px solid var(--color-border-light)' }}>
                  <button onClick={() => navigate('/login')} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', borderRadius: '8px', background: 'transparent', border: 'none', width: '100%', textAlign: 'left', fontSize: '14px', fontWeight: 600, color: '#e53935', cursor: 'pointer' }} className="hover:bg-gray-50">
                    <LogOut size={16} /> Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile Bottom Navigation Bar ── */}
      <nav className="mobile-bottom-nav">
        {mobileNavItems.map((item) => {
          const isActive =
            (currentPath === item.path ||
            (item.path !== '#' && item.path !== '#menu' && currentPath.startsWith(item.path))) ||
            (item.path === '#menu' && isMobileMenuOpen);
          return (
            <button
              key={item.label}
              className={`mobile-bottom-nav-item${isActive ? ' active' : ''}`}
              onClick={() => {
                if (item.path === '#menu') {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                } else if (item.path !== '#') {
                  setIsMobileMenuOpen(false);
                  navigate(item.path);
                }
              }}
            >
              {item.path === '#menu' && isMobileMenuOpen ? <X size={20} /> : item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Full-Screen Mobile Drawer for remaining sidebar options */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black pt-safe-top overflow-y-auto" style={{ top: 0, bottom: '60px' }}>
          <Sidebar activeRoute={title} />
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
