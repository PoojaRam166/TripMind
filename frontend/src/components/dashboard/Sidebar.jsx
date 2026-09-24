import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Compass,
  MapPin,
  Briefcase,
  Bookmark,
  Camera,
  MessageSquare,
  CreditCard,
  Bell,
  Settings,
  Sparkles,
  Plane
} from 'lucide-react';

export default function Sidebar({ activeRoute }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pathToLabel = {
    '/home': 'Home',
    '/explore': 'Explore',
    '/plan': 'Plan a Trip',
    '/trips': 'My Trips',
    '/saved-places': 'Saved Places',
    '/memories': 'Memories',
    '/budget': 'Budget Tracker',
    '/notifications': 'Notifications',
    '/settings': 'Settings',
    '/assistant': 'Travel Assistant',
  };
  const currentActive = activeRoute || pathToLabel[location.pathname] || 'Home';

  const navItems = [
    { label: 'Home', icon: <Home size={18} />, path: '/home' },
    { label: 'Explore', icon: <Compass size={18} />, path: '/explore' },
    { label: 'Travel Assistant', icon: <Sparkles size={18} />, path: '/assistant' },
    { label: 'Plan a Trip', icon: <MapPin size={18} />, path: '/plan', badge: 'AI' },
    { label: 'My Trips', icon: <Briefcase size={18} />, path: '/trips' },
    { label: 'Saved Places', icon: <Bookmark size={18} />, path: '/saved-places' },
    { label: 'Memories', icon: <Camera size={18} />, path: '/memories' },
    { label: 'Budget Tracker', icon: <CreditCard size={18} />, path: '/budget' },
    { label: 'Notifications', icon: <Bell size={18} />, path: '/notifications' },
    { label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
  ];

  return (
    <div className="sidebar-wrapper" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo */}
      <div className="sidebar-logo-container" style={{ padding: '32px 24px 24px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'var(--color-gold)' }}>
          <div style={{ width: 32, height: 32, background: 'var(--color-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Plane size={18} color="var(--color-ink)" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>TripMind</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav-container" style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navItems.map((item) => {
          const isActive = item.label === currentActive;
          return (
            <div
              key={item.label}
              onClick={(e) => {
                if (item.path && item.path !== '#') {
                  navigate(item.path);
                }
              }}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span style={{
                  marginLeft: 'auto',
                  background: 'transparent',
                  color: isActive ? 'inherit' : 'var(--color-gold)',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={14} strokeWidth={2.5} />
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      <div 
        className="sidebar-profile-container" 
        style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px 24px', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }} 
      >
        <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, var(--color-gold) 0%, #a67c00 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px', color: 'var(--color-ink)', boxShadow: '0 4px 12px rgba(212,175,55,0.3)' }}>
          P
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '15px', fontWeight: 700, color: 'white', margin: 0, letterSpacing: '-0.3px' }}>Poojitha</p>
          <div style={{ marginTop: '2px' }}>
            <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '500' }}>
              Free Plan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
