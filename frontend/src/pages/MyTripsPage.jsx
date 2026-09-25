import React, { useState } from 'react';
import {
  Plus,
  MapPin,
  Calendar,
  Users,
  Wallet,
  ArrowRight,
  Share,
  Pencil,
  Clock,
  CheckCircle2,
  Archive,
  Search,
  Sparkles,
  Star,
  Globe,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';

/* ─── Mock trip data ─── */
const ALL_TRIPS = [
  {
    id: 1,
    title: 'Goa Beach Escape',
    destination: 'Goa, India',
    status: 'upcoming',
    dates: 'Oct 10–15, 2026',
    travelers: 2,
    budget: '₹30,000',
    days: 5,
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&fit=crop',
    tags: ['Beach', 'Relaxed'],
    progress: 95,
    aiPlanned: true,
  },
  {
    id: 2,
    title: 'Rajasthan Royal Tour',
    destination: 'Jaipur & Udaipur, India',
    status: 'planning',
    dates: 'Dec 20–28, 2026',
    travelers: 4,
    budget: '₹80,000',
    days: 8,
    coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&fit=crop',
    tags: ['Culture', 'History'],
    progress: 40,
    aiPlanned: true,
  },
  {
    id: 3,
    title: 'Kerala Backwaters',
    destination: 'Alleppey, Kerala',
    status: 'planning',
    dates: 'Nov 5–9, 2026',
    travelers: 2,
    budget: '₹45,000',
    days: 4,
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&fit=crop',
    tags: ['Nature', 'Houseboat'],
    progress: 25,
    aiPlanned: false,
  },
  {
    id: 4,
    title: 'Manali Snow Trek',
    destination: 'Manali, Himachal Pradesh',
    status: 'completed',
    dates: 'Jan 12–18, 2026',
    travelers: 3,
    budget: '₹55,000',
    days: 6,
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&fit=crop',
    tags: ['Adventure', 'Snow'],
    progress: 100,
    aiPlanned: true,
  },
  {
    id: 5,
    title: 'Bali Getaway',
    destination: 'Bali, Indonesia',
    status: 'completed',
    dates: 'Mar 3–10, 2026',
    travelers: 2,
    budget: '₹1,20,000',
    days: 7,
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&fit=crop',
    tags: ['International', 'Beach'],
    progress: 100,
    aiPlanned: true,
  },
  {
    id: 6,
    title: 'Coorg Coffee Trail',
    destination: 'Coorg, Karnataka',
    status: 'archived',
    dates: 'Sep 5–8, 2025',
    travelers: 2,
    budget: '₹20,000',
    days: 3,
    coverImage: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=800&fit=crop',
    tags: ['Nature', 'Food'],
    progress: 100,
    aiPlanned: false,
  },
];

const STATUS_TABS = [
  { key: 'all',       label: 'All Trips',  icon: <Globe size={14} /> },
  { key: 'upcoming',  label: 'Upcoming',   icon: <Clock size={14} /> },
  { key: 'planning',  label: 'Planning',   icon: <Sparkles size={14} /> },
  { key: 'completed', label: 'Completed',  icon: <CheckCircle2 size={14} /> },
  { key: 'archived',  label: 'Archived',   icon: <Archive size={14} /> },
];

const STATUS_STYLES = {
  upcoming:  { bg: '#EFF6FF', color: '#2563EB', label: 'Upcoming' },
  planning:  { bg: '#FFFBEB', color: '#D97706', label: 'Planning' },
  completed: { bg: '#ECFDF5', color: '#059669', label: 'Completed' },
  archived:  { bg: '#F3F4F6', color: '#6B7280', label: 'Archived' },
};

/* ─── Trip Card ─── */
function TripCard({ trip, navigate }) {
  const [hovered, setHovered] = useState(false);
  const s = STATUS_STYLES[trip.status];

  return (
    <div
      className="hover-lift"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--color-surface)',
        borderRadius: '20px',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Cover Image */}
      <div style={{
        height: '180px',
        backgroundImage: `url('${trip.coverImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />

        {/* Status badge */}
        <div style={{
          position: 'absolute', top: '14px', right: '14px',
          background: s.bg, color: s.color,
          fontSize: '11px', fontWeight: 700, padding: '4px 10px',
          borderRadius: '999px',
          display: 'flex', alignItems: 'center', gap: '5px',
        }}>
          {s.label}
        </div>

        {/* AI Badge */}
        {trip.aiPlanned && (
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
            color: 'var(--color-gold)', fontSize: '10px', fontWeight: 700,
            padding: '4px 10px', borderRadius: '999px',
            display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            <Sparkles size={10} /> AI
          </div>
        )}

        {/* Bottom title */}
        <div style={{ position: 'absolute', bottom: '14px', left: '16px' }}>
          <p style={{ color: 'white', fontSize: '18px', fontWeight: 800, margin: 0, letterSpacing: '-0.3px' }}>
            {trip.title}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: '2px 0 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={11} /> {trip.destination}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>

        {/* Meta */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
            <Calendar size={13} color="var(--color-gold-dark)" /> {trip.dates}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
            <Users size={13} color="var(--color-gold-dark)" /> {trip.travelers} travelers
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
            <Wallet size={13} color="var(--color-gold-dark)" /> {trip.budget}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {trip.tags.map(tag => (
            <span key={tag} style={{
              background: 'var(--color-gold-muted)', color: 'var(--color-gold-dark)',
              fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
              border: '1px solid rgba(184,147,90,0.2)',
            }}>
              {tag}
            </span>
          ))}
          <span style={{
            background: 'var(--color-surface-2)', color: 'var(--color-text-muted)',
            fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px',
          }}>
            {trip.days}d
          </span>
        </div>

        {/* Progress bar */}
        {trip.status !== 'archived' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
              <span>Trip progress</span>
              <span style={{ color: trip.progress === 100 ? '#059669' : 'var(--color-gold-dark)' }}>{trip.progress}%</span>
            </div>
            <div style={{ background: 'var(--color-surface-3)', borderRadius: '999px', height: '5px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${trip.progress}%`,
                background: trip.progress === 100
                  ? 'linear-gradient(90deg, #10B981, #34D399)'
                  : 'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold-light))',
                borderRadius: '999px',
                transition: 'width 0.6s ease',
              }} />
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <button
            onClick={() => navigate(`/trip/${trip.id}`)}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              background: 'var(--color-ink)', color: 'white',
              border: 'none', padding: '10px 0', borderRadius: '12px',
              fontWeight: 700, fontSize: '13px', cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={e => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-ink)'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'var(--color-ink)'; e.currentTarget.style.color = 'white'; }}
          >
            Open <ArrowRight size={14} />
          </button>
          {[{ icon: <Pencil size={15} />, title: 'Edit' }, { icon: <Share size={15} />, title: 'Share' }].map(btn => (
            <button
              key={btn.title}
              title={btn.title}
              style={{
                width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--color-surface-2)', border: '1px solid var(--color-border)',
                borderRadius: '12px', cursor: 'pointer', color: 'var(--color-text-secondary)',
                transition: 'all 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold-dark)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
            >
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Stats Banner ─── */
function StatsBanner({ trips }) {
  const stats = [
    { label: 'Total Trips',    value: trips.length,                                      icon: <Globe size={20} />,    color: 'var(--color-gold-dark)',  bg: 'var(--color-gold-muted)',  border: 'rgba(184,147,90,0.3)' },
    { label: 'Upcoming',       value: trips.filter(t => t.status === 'upcoming').length,  icon: <Clock size={20} />,    color: '#2563EB',                bg: '#EFF6FF',                  border: '#BFDBFE' },
    { label: 'In Planning',    value: trips.filter(t => t.status === 'planning').length,  icon: <Sparkles size={20} />, color: '#D97706',                bg: '#FFFBEB',                  border: '#FDE68A' },
    { label: 'Completed',      value: trips.filter(t => t.status === 'completed').length, icon: <Star size={20} />,     color: '#059669',                bg: '#ECFDF5',                  border: '#6EE7B7' },
    { label: 'Days Travelled', value: trips.reduce((s, t) => s + t.days, 0),             icon: <Calendar size={20} />, color: 'var(--color-gold-dark)',  bg: 'var(--color-gold-muted)',  border: 'rgba(184,147,90,0.3)' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-7">
      {stats.map(s => (
        <div key={s.label} className="hover-lift" style={{
          background: s.bg,
          border: `1.5px solid ${s.border}`,
          borderRadius: '16px', padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '8px',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.3s ease',
        }}>
          <div style={{ color: s.color }}>{s.icon}</div>
          <p style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-text-primary)', margin: 0, letterSpacing: '-1px' }}>{s.value}</p>
          <p style={{ fontSize: '11px', fontWeight: 700, color: s.color, margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Page ─── */
export default function MyTripsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = ALL_TRIPS.filter(t => {
    const matchesTab = activeTab === 'all' || t.status === activeTab;
    const q = search.toLowerCase();
    const matchesSearch = t.title.toLowerCase().includes(q) || t.destination.toLowerCase().includes(q);
    return matchesTab && matchesSearch;
  });

  const countOf = key => ALL_TRIPS.filter(t => t.status === key).length;

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="My Trips" />
      </aside>

      <main className="dashboard-main">
        <TopNav title="My Trips" />

        <div className="dashboard-content" style={{ maxWidth: '1300px', margin: '0 auto', width: '100%', padding: '32px 48px 80px' }}>

          {/* ── Gold Hero Banner — detached card style ── */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)',
            padding: '48px 48px 56px',
            margin: '0 0 32px 0',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '30%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '20px', right: '20%', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,174,120,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={18} color="var(--color-ink)" />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>TripMind</span>
                </div>
                <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: 'white', margin: '0 0 8px', letterSpacing: '-1px', lineHeight: 1.1 }}>
                  My Trips
                </h1>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                  {ALL_TRIPS.length} trips · {ALL_TRIPS.filter(t => ['upcoming','planning'].includes(t.status)).length} active
                </p>
              </div>
              <button
                onClick={() => navigate('/plan')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'var(--color-gold)', color: 'var(--color-text-primary)',
                  border: 'none', padding: '12px 24px', borderRadius: '14px',
                  fontWeight: 800, fontSize: '14px', cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(184,147,90,0.45)',
                  transition: 'all 0.2s ease', flexShrink: 0,
                }}
                onMouseOver={e => { e.currentTarget.style.background = 'var(--color-gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Plus size={18} /> Plan a New Trip
              </button>
            </div>
          </div>

          {/* Stats */}
          <StatsBanner trips={ALL_TRIPS} />

          {/* AI Insight */}
          <div className="hover-lift animate-fade-in-up" style={{
            background: 'linear-gradient(to right, var(--color-surface-2), white)',
            border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)',
            padding: '14px 20px', borderRadius: '12px',
            display: 'flex', alignItems: 'center', gap: '14px',
            marginBottom: '28px', boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ width: '28px', height: '28px', background: 'rgba(184,147,90,0.15)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sparkles size={14} color="var(--color-gold-dark)" />
            </div>
            <p style={{ margin: 0, color: 'var(--color-text-primary)', fontSize: '13px', fontWeight: 500 }}>
              <span style={{ fontWeight: 700, color: 'var(--color-gold-dark)', marginRight: '6px' }}>AI Insight:</span>
              You have a Rajasthan trip coming up in December — great time to visit! Book trains to Udaipur at least 30 days in advance for best prices.
            </p>
          </div>

          {/* Tabs + Search */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div className="responsive-tabs hide-scrollbar" style={{ display: 'flex', gap: '4px', background: 'var(--color-surface-2)', padding: '4px', borderRadius: '14px', border: '1px solid var(--color-border)' }}>
              {STATUS_TABS.map(tab => {
                const count = tab.key === 'all' ? ALL_TRIPS.length : countOf(tab.key);
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '8px 14px', borderRadius: '10px', border: 'none',
                      cursor: 'pointer', fontSize: '13px',
                      fontWeight: isActive ? 700 : 500,
                      background: isActive ? 'white' : 'transparent',
                      color: isActive ? 'var(--color-ink)' : 'var(--color-text-secondary)',
                      boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 0.2s ease', whiteSpace: 'nowrap',
                    }}
                  >
                    {tab.icon} {tab.label}
                    <span style={{
                      background: isActive ? 'var(--color-gold-muted)' : 'var(--color-surface-3)',
                      color: isActive ? 'var(--color-gold-dark)' : 'var(--color-text-muted)',
                      fontSize: '11px', fontWeight: 700, padding: '1px 7px', borderRadius: '999px',
                    }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'var(--color-surface)', border: '1.5px solid var(--color-border)',
              borderRadius: '12px', padding: '10px 16px',
              minWidth: '200px', boxShadow: 'var(--shadow-sm)',
            }}>
              <Search size={16} color="var(--color-text-muted)" />
              <input
                type="text"
                placeholder="Search trips..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '14px', color: 'var(--color-text-primary)', width: '100%' }}
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr)', gap: '24px' }}>
              {filtered.map(trip => (
                <TripCard key={trip.id} trip={trip} navigate={navigate} />
              ))}

              {activeTab === 'all' && (
                <div
                  onClick={() => navigate('/plan')}
                  className="hover-lift"
                  style={{
                    background: 'var(--color-surface-2)',
                    border: '2px dashed var(--color-border)',
                    borderRadius: '20px',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '16px', padding: '40px 24px',
                    cursor: 'pointer', minHeight: '280px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.background = 'var(--color-gold-muted)'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.background = 'var(--color-surface-2)'; }}
                >
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-gold-muted)', border: '2px solid rgba(184,147,90,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={24} color="var(--color-gold-dark)" />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontWeight: 700, fontSize: '16px', color: 'var(--color-text-primary)', margin: '0 0 6px' }}>Plan a new trip</p>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0 }}>Let AI craft your perfect itinerary</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 24px', background: 'var(--color-surface)', borderRadius: '24px', border: '1px solid var(--color-border)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-gold-muted)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={28} color="var(--color-gold-dark)" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 10px' }}>No trips found</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: '0 0 28px' }}>
                {search ? `No trips match "${search}"` : `You have no ${activeTab} trips yet.`}
              </p>
              <button onClick={() => navigate('/plan')} style={{ background: 'var(--color-ink)', color: 'white', border: 'none', padding: '12px 28px', borderRadius: '12px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                Plan your first trip →
              </button>
            </div>
          )}

        </div>{/* end dashboard-content */}
      </main>
    </div>
  );
}
