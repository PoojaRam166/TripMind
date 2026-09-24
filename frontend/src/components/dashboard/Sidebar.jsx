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
    <div className="flex flex-col h-full bg-black">
      {/* Logo */}
      <div className="p-8 pb-6">
        <Link to="/" className="flex items-center gap-2 no-underline text-[var(--color-gold)]">
          <div className="w-8 h-8 bg-[var(--color-gold)] rounded-full flex items-center justify-center">
            <Plane size={18} color="var(--color-ink)" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold">TripMind</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 flex flex-col gap-1">
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
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${isActive ? 'bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold shadow-[0_4px_12px_rgba(184,147,90,0.25)]' : 'text-white/65 hover:bg-white/10 hover:text-white font-medium'}`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`flex items-center gap-1 text-[13px] font-bold tracking-wide ml-auto ${isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-gold)]'}`}>
                  <Sparkles size={14} strokeWidth={2.5} />
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      <div className="flex items-center gap-3 p-5 px-6 border-t border-white/10 mt-auto">
        <div className="w-11 h-11 bg-gradient-to-br from-[var(--color-gold)] to-[#a67c00] rounded-full flex items-center justify-center font-extrabold text-lg text-[var(--color-ink)] shadow-[0_4px_12px_rgba(212,175,55,0.3)]">
          P
        </div>
        <div className="flex-1">
          <p className="text-[15px] font-bold text-white m-0 tracking-tight">Poojitha</p>
          <div className="mt-0.5">
            <span className="text-[11px] text-white/60 font-medium">
              Free Plan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
