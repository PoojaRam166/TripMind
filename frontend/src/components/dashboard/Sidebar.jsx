import React, { useState, useRef, useEffect } from 'react';
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
  Plane,
  ChevronDown,
  User,
  LogOut,
  HelpCircle
} from 'lucide-react';

export default function Sidebar({ activeRoute, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    '/help': 'Help & Support',
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
    { label: 'Help & Support', icon: <HelpCircle size={18} />, path: '/help' },
    { label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
  ];

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Logo */}
      <div className="p-8 pb-6">
        <Link to="/" onClick={() => onClose && onClose()} className="flex items-center gap-2 no-underline text-[var(--color-gold)]">
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
                  if (onClose) onClose();
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

      <div className="relative" ref={profileRef}>
        <div 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center gap-3 p-5 px-6 border-t border-white/10 mt-auto cursor-pointer hover:bg-white/5 transition-colors"
        >
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
          <ChevronDown size={18} className="text-white/60" style={{ transform: isProfileOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
        </div>

        {/* Profile Dropdown */}
        {isProfileOpen && (
          <div className="absolute bottom-full left-4 right-4 mb-2 bg-[var(--color-surface)] rounded-xl shadow-xl border border-[var(--color-border)] p-2 z-50">
            <div className="flex flex-col gap-1">
              <button onClick={() => navigate('/settings')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-[14px] font-semibold text-[var(--color-text-primary)] w-full text-left transition-colors">
                <User size={16} /> My Profile
              </button>
              <button onClick={() => navigate('/settings')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-[14px] font-semibold text-[var(--color-text-primary)] w-full text-left transition-colors">
                <Settings size={16} /> Settings
              </button>
              <div className="h-px bg-[var(--color-border-light)] my-1"></div>
              <button onClick={() => navigate('/login')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-50 text-[14px] font-semibold text-red-600 w-full text-left transition-colors">
                <LogOut size={16} /> Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
