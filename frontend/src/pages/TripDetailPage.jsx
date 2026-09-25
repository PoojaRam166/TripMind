import React, { useState } from 'react';
import { 
  Share, 
  Download, 
  MapPin, 
  Plane, 
  Hotel, 
  Coffee, 
  Clock, 
  Map as MapIcon, 
  Navigation,
  Plus,
  Star,
  Bookmark,
  Search,
  ChevronDown,
  Wallet,
  Ticket,
  Send,
  Bot,
  Sparkles,
  Globe,
  Coins,
  Mic
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';
import CustomSelect from '../components/CustomSelect';

const OverviewTab = () => (
  <div className="responsive-grid-overview" style={{ display: 'grid', gap: '32px' }}>
    {/* Left Column */}
    <div>
      {/* Top Stats */}
      <div className="trip-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div style={{ background: 'linear-gradient(145deg, #fffbeb, #fde68a)', padding: '20px', borderRadius: '16px', border: '1px solid #fcd34d' }}>
          <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Estimated Cost</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: 0 }}>₹28,500</p>
        </div>
        <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Remaining Budget</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: 0 }}>₹1,500</p>
        </div>
        <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
          <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Weather</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: 0 }}>28°C ☀️</p>
        </div>
      </div>

      {/* Trip at a glance */}
      <div style={{ background: 'var(--color-surface)', padding: '32px', borderRadius: '24px', border: '1px solid var(--color-border)', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '24px' }}>Your trip at a glance</h3>
        <div className="trip-glance-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 40px' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Destination</p>
            <p style={{ fontSize: '15px', fontWeight: 500, margin: 0 }}>Goa, India</p>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Dates</p>
            <p style={{ fontSize: '15px', fontWeight: 500, margin: 0 }}>Oct 10 – 15, 2026</p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Transport</p>
            <p style={{ fontSize: '15px', fontWeight: 500, margin: 0 }}>Flight (IndiGo)</p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Accommodation</p>
            <p style={{ fontSize: '15px', fontWeight: 500, margin: 0 }}>Sea Breeze Resort</p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Travel Style</p>
            <p style={{ fontSize: '15px', fontWeight: 500, margin: 0 }}>Relaxed</p>
          </div>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Travelers</p>
            <p style={{ fontSize: '15px', fontWeight: 500, margin: 0 }}>2 people</p>
          </div>
        </div>
      </div>

      {/* AI Advice Banner */}
      <div className="hover-lift" style={{ 
        background: 'linear-gradient(to right, var(--color-surface-2), white)', 
        border: '1px solid var(--color-border)', 
        borderLeft: '4px solid var(--color-gold)',
        padding: '16px 20px', 
        borderRadius: '12px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '14px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ width: '28px', height: '28px', background: 'rgba(184, 147, 90, 0.15)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px rgba(184, 147, 90, 0.2)' }}>
          <Star size={14} color="var(--color-gold-dark)" fill="var(--color-gold)" className="spin-animation" />
        </div>
        <p style={{ margin: 0, color: 'var(--color-text-primary)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.2px' }}>
          <span style={{ fontWeight: 700, color: 'var(--color-gold-dark)', marginRight: '6px' }}>AI Insight:</span>
          Your plan is within budget and looks well-balanced. Consider visiting Dudhsagar Falls on Day 3 before 9 AM to avoid crowds.
        </p>
      </div>
    </div>

    {/* Right Column (Sidebar) */}
    <div>
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>Recommended places</h3>
      
      {[
        { name: 'Baga Beach', type: 'Beach', rating: '4.7', price: 'Free', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=100&h=100&fit=crop' },
        { name: 'Fort Aguada', type: 'History', rating: '4.5', price: '₹30', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=100&h=100&fit=crop' },
        { name: 'Anjuna Market', type: 'Shopping', rating: '4.3', price: 'Free', img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=100&h=100&fit=crop' }
      ].map((place, i) => (
        <div key={i} style={{ display: 'flex', gap: '16px', background: 'var(--color-surface)', padding: '12px', borderRadius: '16px', border: '1px solid var(--color-border)', marginBottom: '12px', alignItems: 'center' }}>
          <img src={place.img} alt={place.name} style={{ width: '64px', height: '64px', borderRadius: '12px', objectFit: 'cover' }} />
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 'bold' }}>{place.name}</h4>
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              <span style={{ color: 'var(--color-gold-dark)', fontWeight: 600 }}>{place.type}</span>
              <span>★ {place.rating}</span>
              <span>{place.price}</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <button className="hover-lift" style={{ flex: 1, display: 'flex', justifyContent: 'center', background: 'var(--color-surface)', border: '1px solid var(--color-ink)', borderRadius: '999px', padding: '6px 14px', color: 'var(--color-text-primary)', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease' }}>+ Add</button>
              <button className="hover-lift" style={{ flex: 1, display: 'flex', justifyContent: 'center', background: 'var(--color-surface)', border: '1px solid var(--color-ink)', borderRadius: '999px', padding: '6px 14px', color: 'var(--color-text-primary)', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease' }}>Save</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ItineraryTab = () => {
  const [activeDay, setActiveDay] = useState(1);
  const days = [1, 2, 3, 4, 5];

  const itineraryData = {
    1: {
      title: 'Arrival and beach evening',
      items: [
        { time: '10:00 AM', title: 'Arrive in Goa', desc: 'IndiGo 6E-214 from Bengaluru', price: '₹6,200 (flight)', icon: <Plane size={16} /> },
        { time: '12:30 PM', title: 'Hotel check-in', desc: 'Sea Breeze Resort, Calangute', price: '₹2,400', icon: <Hotel size={16} /> },
        { time: '4:00 PM', title: 'Baga Beach', desc: 'Watch the sunset, water sports available', price: 'Free', icon: <MapPin size={16} /> },
        { time: '7:30 PM', title: 'Dinner at Infantaria', desc: 'Famous Goan-Portuguese cuisine', price: '₹800/person', icon: <Coffee size={16} /> }
      ]
    },
    2: {
      title: 'Historical Forts & Local Markets',
      items: [
        { time: '9:00 AM', title: 'Breakfast', desc: 'Local Goan delicacies at Cafe Alchemia', price: '₹400/person', icon: <Coffee size={16} /> },
        { time: '10:30 AM', title: 'Fort Aguada', desc: 'Explore the 17th-century Portuguese fort', price: '₹50 entry', icon: <MapPin size={16} /> },
        { time: '1:30 PM', title: 'Lunch at Thalassa', desc: 'Greek tavern with beautiful ocean views', price: '₹1,500/person', icon: <Coffee size={16} /> },
        { time: '4:00 PM', title: 'Anjuna Flea Market', desc: 'Shopping for souvenirs and local crafts', price: 'Variable', icon: <Star size={16} /> }
      ]
    },
    3: {
      title: 'Waterfalls and Spice Plantations',
      items: [
        { time: '8:00 AM', title: 'Trip to Dudhsagar', desc: 'Jeep safari to the majestic waterfalls', price: '₹1,200/person', icon: <Navigation size={16} /> },
        { time: '2:00 PM', title: 'Spice Plantation Tour', desc: 'Guided tour followed by traditional lunch', price: '₹800/person', icon: <MapPin size={16} /> },
        { time: '6:00 PM', title: 'Return to Hotel', desc: 'Relax and unwind by the pool', price: 'Free', icon: <Hotel size={16} /> }
      ]
    },
    4: {
      title: 'South Goa Exploration',
      items: [
        { time: '9:30 AM', title: 'Colva Beach', desc: 'Peaceful morning walk on the white sand', price: 'Free', icon: <MapPin size={16} /> },
        { time: '12:00 PM', title: 'Basilica of Bom Jesus', desc: 'UNESCO World Heritage site visit', price: 'Free', icon: <MapPin size={16} /> },
        { time: '3:00 PM', title: 'Palolem Beach', desc: 'Kayaking and sunset views', price: '₹500 (kayak)', icon: <Star size={16} /> }
      ]
    },
    5: {
      title: 'Departure',
      items: [
        { time: '9:00 AM', title: 'Last minute shopping', desc: 'Panjim market for cashews and spices', price: 'Variable', icon: <Star size={16} /> },
        { time: '12:00 PM', title: 'Hotel check-out', desc: 'Sea Breeze Resort, Calangute', price: '-', icon: <Hotel size={16} /> },
        { time: '2:30 PM', title: 'Flight back', desc: 'IndiGo 6E-215 to Bengaluru', price: '₹6,200 (flight)', icon: <Plane size={16} /> }
      ]
    }
  };

  const activeDayData = itineraryData[activeDay] || itineraryData[1];

  return (
    <div className="responsive-flex-column" style={{ gap: '32px' }}>
      {/* Day Navigation Sidebar */}
      <div className="responsive-day-nav hide-scrollbar" style={{ width: '160px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {days.map(day => (
          <div 
            key={day}
            onClick={() => setActiveDay(day)}
            className="hover-lift"
            style={{
              padding: '14px 20px',
              cursor: 'pointer',
              background: 'var(--color-surface)',
              color: activeDay === day ? 'var(--color-ink)' : 'var(--color-text-secondary)',
              border: activeDay === day ? '1.5px solid var(--color-gold)' : '1px solid var(--color-border)',
              boxShadow: activeDay === day ? 'var(--shadow-sm)' : 'none',
              borderRadius: '12px',
              fontWeight: activeDay === day ? 700 : 500,
              fontSize: '14px',
              transition: 'all 0.2s'
            }}
          >
            Day {day}
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '24px' }}>Day {activeDay} — {activeDayData.title}</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{ position: 'absolute', top: '30px', bottom: '30px', left: '19px', width: '2px', background: 'var(--color-border)' }} />

          {activeDayData.items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
              
              {/* Timeline Icon */}
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-surface)', border: '2px solid var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold-dark)', flexShrink: 0, boxShadow: '0 0 0 4px #F8FAFC' }}>
                {item.icon}
              </div>

              {/* Timeline Card */}
              <div className="hover-lift" style={{ flex: 1, background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-gold-dark)' }}>{item.time}</span>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{item.title}</span>
                  </div>
                  <p style={{ margin: '0 0 6px 0', fontSize: '14px', color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                  <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>{item.price}</p>
                </div>
                <div>
                  <button className="btn btn-sm hover-lift" style={{ border: '1.5px solid var(--color-ink)', background: 'transparent', color: 'var(--color-text-primary)' }}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MapTab = () => {
  return (
    <div className="responsive-flex-column" style={{ gap: '24px', height: '600px' }}>
      {/* Route List */}
      <div className="map-sidebar" style={{ flexShrink: 0, background: 'var(--color-surface)', borderRadius: '24px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid var(--color-border)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Day 1 route</h3>
        </div>
        
        <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { id: 'A', title: 'Goa Airport', time: '10:00', color: 'var(--color-text-primary)' },
            { id: 'B', title: 'Sea Breeze Resort', time: '12:30', color: 'var(--color-gold-dark)' },
            { id: 'C', title: 'Baga Beach', time: '16:00', color: 'var(--color-text-secondary)' },
            { id: 'D', title: 'Infantaria Restaurant', time: '19:30', color: 'var(--color-text-primary)' }
          ].map((point, i) => (
            <div key={point.id} style={{ display: 'flex', gap: '16px', position: 'relative' }}>
              {i < 3 && <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '-24px', width: '2px', background: 'var(--color-border)' }} />}
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: point.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', flexShrink: 0, zIndex: 1 }}>
                {point.id}
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 600 }}>{point.title}</h4>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-secondary)' }}>{point.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '24px 20px', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px' }}>
          <h4 style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-gold-dark)', margin: '0 0 12px 0', letterSpacing: '0.5px' }}>Route summary</h4>
          <p style={{ fontSize: '14px', margin: '0 0 6px 0', color: 'var(--color-text-primary)', fontWeight: 600 }}>Total distance: <span style={{ fontWeight: 800 }}>42 km</span></p>
          <p style={{ fontSize: '14px', margin: 0, color: 'var(--color-text-primary)', fontWeight: 600 }}>Travel time: <span style={{ fontWeight: 800 }}>~1h 35min</span></p>
        </div>
      </div>

      {/* Map Visualization */}
      <div className="map-visualization-mobile" style={{ flex: 1, background: 'linear-gradient(135deg, #e0e7ff 0%, #dcfce7 100%)', borderRadius: '24px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Fake Map Markers */}
        <div className="map-placeholder-inner" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
          <div style={{ position: 'absolute', top: '50px', left: '50px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-ink)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>A</div>
          <div style={{ position: 'absolute', top: '200px', left: '200px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-gold-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>B</div>
          <div style={{ position: 'absolute', top: '100px', left: '160px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-text-secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>C</div>
          <div style={{ position: 'absolute', top: '220px', left: '260px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-ink)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>D</div>
          
          <MapIcon size={48} color="var(--color-ink)" style={{ position: 'absolute', top: '120px', left: '200px', opacity: 0.8 }} />
          <p style={{ position: 'absolute', top: '170px', left: '170px', fontWeight: 'bold', color: '#1E293B' }}>Interactive Map</p>
          <p style={{ position: 'absolute', top: '190px', left: '165px', fontSize: '12px', color: '#475569' }}>Route visualization · Goa, India</p>
        </div>

        {/* Map Actions */}
        <div className="map-actions-mobile" style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px' }}>
          <button style={{ background: 'var(--color-gold)', color: 'var(--color-text-primary)', border: 'none', padding: '12px 24px', borderRadius: '999px', fontWeight: 'bold', cursor: 'pointer', boxShadow: 'var(--shadow-md)', whiteSpace: 'nowrap' }}>
            Optimize Route
          </button>
          <button style={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)', border: 'none', padding: '12px 24px', borderRadius: '999px', fontWeight: 'bold', cursor: 'pointer', boxShadow: 'var(--shadow-sm)', whiteSpace: 'nowrap' }}>
            + Add Stop
          </button>
        </div>
      </div>
    </div>
  );
}

const PlacesTab = () => {
  const [sortBy, setSortBy] = useState('recommended');
  const [isSearching, setIsSearching] = useState(false);

  const [places, setPlaces] = useState([
    {
      name: 'Dudhsagar Waterfalls',
      category: 'Nature & Wildlife',
      rating: 4.8,
      reviews: 1240,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop',
      description: 'A majestic four-tiered waterfall located on the Mandovi River, surrounded by lush deciduous forests.'
    },
    {
      name: 'Aguada Fort',
      category: 'Historical',
      rating: 4.6,
      reviews: 3200,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop',
      description: 'A well-preserved seventeenth-century Portuguese fort standing on Sinquerim Beach, overlooking the Arabian Sea.'
    },
    {
      name: 'Baga Beach',
      category: 'Beaches',
      rating: 4.5,
      reviews: 5120,
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop',
      description: 'Famous for its water sports, lively nightlife, and scenic beauty. A must-visit for sunset lovers.'
    },
    {
      name: 'Basilica of Bom Jesus',
      category: 'Culture & Heritage',
      rating: 4.7,
      reviews: 2890,
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&h=400&fit=crop',
      description: 'A UNESCO World Heritage site housing the mortal remains of St. Francis Xavier.'
    },
    {
      name: 'Anjuna Flea Market',
      category: 'Shopping',
      rating: 4.4,
      reviews: 1560,
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop',
      description: 'A vibrant weekly market offering a mix of local crafts, jewelry, clothes, and live music.'
    },
    {
      name: 'Spice Plantations',
      category: 'Nature',
      rating: 4.6,
      reviews: 840,
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&h=400&fit=crop',
      description: 'Take a guided tour through lush plantations and learn about authentic Goan spices.'
    }
  ]);

  const handleFindMore = () => {
    if (isSearching) return;
    setIsSearching(true);
    setTimeout(() => {
      setPlaces(prev => [...prev, 
        {
          name: 'Chapora Fort',
          category: 'Sightseeing',
          rating: 4.3,
          reviews: 1200,
          image: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&h=400&fit=crop',
          description: 'A historic fort with stunning sunset views of the coastline, made famous by Bollywood movies.'
        },
        {
          name: 'Aguada Fort',
          category: 'History',
          rating: 4.5,
          reviews: 3100,
          image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop',
          description: 'A well-preserved seventeenth-century Portuguese fort standing on Sinquerim beach.'
        }
      ]);
      setIsSearching(false);
    }, 1500);
  };

  const sortedPlaces = [...places].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'reviews') return b.reviews - a.reviews;
    return 0; // recommended order
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 8px 0', color: 'var(--color-text-primary)' }}>Must-visit places in Goa</h3>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '15px' }}>Curated recommendations for your trip.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', width: '240px' }}>
            <CustomSelect 
              options={[
                { label: 'Sort by: Recommended', value: 'recommended' },
                { label: 'Sort by: Top Rated', value: 'rating' },
                { label: 'Sort by: Most Reviewed', value: 'reviews' }
              ]}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              name="sortBy"
              customStyles={{ padding: '10px 16px', fontSize: '14px', borderRadius: '12px' }}
            />
          </div>

          <button onClick={handleFindMore} disabled={isSearching} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-ink)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: 'bold', cursor: isSearching ? 'wait' : 'pointer', fontSize: '14px', height: '44px', opacity: isSearching ? 0.7 : 1 }}>
            <Search size={16} color="var(--color-gold-light)" />
            {isSearching ? 'Finding...' : 'Find more places'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr)', gap: '24px' }}>
        {sortedPlaces.map((place, idx) => (
          <div key={idx} className="hover-lift" style={{ background: 'var(--color-surface)', borderRadius: '20px', border: '1px solid var(--color-border)', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ height: '200px', backgroundImage: `url('${place.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(4px)', padding: '6px 10px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-primary)' }}>
                <Star size={14} fill="var(--color-gold)" color="var(--color-gold)" />
                {place.rating}
              </div>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{place.category}</p>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0', color: 'var(--color-text-primary)' }}>{place.name}</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: '0 0 20px 0', lineHeight: 1.5, flex: 1 }}>{place.description}</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="hover-lift" style={{ flex: 1, background: 'var(--color-surface)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)', padding: '10px', borderRadius: '12px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>
                  + Add to plan
                </button>
                <button className="hover-lift" style={{ flex: 1, background: 'var(--color-ink)', color: 'white', border: 'none', padding: '10px', borderRadius: '12px', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}>
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const HotelsTab = () => {
  const [sortBy, setSortBy] = useState('recommended');
  const [isSearching, setIsSearching] = useState(false);

  const [hotels, setHotels] = useState([
    {
      name: 'Taj Exotica Resort & Spa',
      location: 'Benaulim, South Goa',
      rating: 4.9,
      reviews: 4200,
      price: '₹22,500/night',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      description: 'A Mediterranean-style luxury resort sprawling across 56 acres of lush gardens along Benaulim Beach.'
    },
    {
      name: 'The Leela Goa',
      location: 'Mobor Beach, Cavelossim',
      rating: 4.8,
      reviews: 3800,
      price: '₹25,000/night',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop',
      description: 'Opulent riverside property featuring a 12-hole golf course, private beach access, and lavish pool villas.'
    },
    {
      name: 'W Goa',
      location: 'Vagator Beach, North Goa',
      rating: 4.7,
      reviews: 2900,
      price: '₹18,000/night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      description: 'Trendy, vibrant lifestyle hotel nestled beneath Chapora Fort with sweeping views of the Arabian Sea.'
    },
    {
      name: 'Alila Diwa Goa',
      location: 'Majorda, South Goa',
      rating: 4.8,
      reviews: 2100,
      price: '₹14,500/night',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
      description: 'A serene retreat set amidst lush paddy fields, blending contemporary luxury with Goan architecture.'
    },
    {
      name: 'Goa Marriott Resort',
      location: 'Panaji, North Goa',
      rating: 4.5,
      reviews: 4800,
      price: '₹12,000/night',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
      description: 'Waterfront resort where the Mandovi River meets the Arabian Sea, just minutes from the historic capital.'
    },
    {
      name: 'ITC Grand Goa',
      location: 'Arossim Beach, South Goa',
      rating: 4.7,
      reviews: 3100,
      price: '₹16,500/night',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
      description: 'A village-style beachfront resort set across 45 acres with shimmering waterways and Indo-Portuguese charm.'
    }
  ]);

  const handleSearchMore = () => {
    if (isSearching) return;
    setIsSearching(true);
    setTimeout(() => {
      setHotels(prev => [...prev,
        {
          name: 'Grand Hyatt Goa',
          location: 'Bambolim, North Goa',
          rating: 4.6,
          reviews: 5200,
          price: '₹19,000/night',
          image: 'https://images.unsplash.com/photo-1542314831-c53cd4185af1?w=600&h=400&fit=crop',
          description: 'A luxurious 5-star resort overlooking Bambolim Bay with multiple pools and fine dining.'
        },
        {
          name: 'Hard Rock Hotel',
          location: 'Calangute, North Goa',
          rating: 4.4,
          reviews: 2800,
          price: '₹11,500/night',
          image: 'https://images.unsplash.com/photo-1551882547-ff40c0d5b5df?w=600&h=400&fit=crop',
          description: 'Music-inspired resort located in the heart of Calangute, featuring live performances and rock memorabilia.'
        }
      ]);
      setIsSearching(false);
    }, 1500);
  };

  const sortedHotels = [...hotels].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price_high') return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
    if (sortBy === 'price_low') return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
    return 0; // recommended order
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 8px 0', color: 'var(--color-text-primary)' }}>Luxury Stays in Goa</h3>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '15px' }}>Handpicked accommodations tailored for your trip.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', width: '240px' }}>
            <CustomSelect 
              options={[
                { label: 'Sort by: Recommended', value: 'recommended' },
                { label: 'Sort by: Top Rated', value: 'rating' },
                { label: 'Sort by: Price (Low to High)', value: 'price_low' },
                { label: 'Sort by: Price (High to Low)', value: 'price_high' }
              ]}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              name="sortBy"
              customStyles={{ padding: '10px 16px', fontSize: '14px', borderRadius: '12px' }}
            />
          </div>

          <button onClick={handleSearchMore} disabled={isSearching} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-ink)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: 'bold', cursor: isSearching ? 'wait' : 'pointer', fontSize: '14px', height: '44px', opacity: isSearching ? 0.7 : 1 }}>
            <Search size={16} color="var(--color-gold-light)" />
            {isSearching ? 'Searching...' : 'Search hotels'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr)', gap: '24px' }}>
        {sortedHotels.map((hotel, idx) => (
          <div key={idx} className="hover-lift" style={{ background: 'var(--color-surface)', borderRadius: '20px', border: '1px solid var(--color-border)', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ height: '220px', backgroundImage: `url('${hotel.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(4px)', padding: '6px 10px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-primary)' }}>
                <Star size={14} fill="var(--color-gold)" color="var(--color-gold)" />
                {hotel.rating}
              </div>
            </div>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={12} /> {hotel.location}
              </p>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 12px 0', color: 'var(--color-text-primary)' }}>{hotel.name}</h4>
              <p style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.5', flex: 1 }}>{hotel.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
                  {hotel.price}
                </div>
                <button className="hover-lift" style={{ background: 'var(--color-ink)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}>
                  View Deal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const BudgetTab = () => {
  const totalBudget = 30000;
  const expenses = [
    { category: 'Accommodation', icon: <Hotel size={20} />, amount: 14000, color: 'var(--color-gold)' },
    { category: 'Flights & Transport', icon: <Plane size={20} />, amount: 8500, color: '#3D3D3D' },
    { category: 'Food & Dining', icon: <Coffee size={20} />, amount: 4000, color: 'var(--color-accent-slate)' },
    { category: 'Activities & Tours', icon: <Ticket size={20} />, amount: 2000, color: 'var(--color-gold-light)' }
  ];
  
  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remaining = totalBudget - totalSpent;
  
  return (
    <div className="responsive-grid-budget" style={{ display: 'grid', gap: '32px' }}>
      
      {/* Left Column: Breakdown List */}
      <div>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 24px 0', color: 'var(--color-text-primary)' }}>Expense Breakdown</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {expenses.map((expense, idx) => (
            <div key={idx} className="hover-lift" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: expense.color }}>
                  {expense.icon}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{expense.category}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)' }}>Estimated cost</p>
                </div>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
                ₹{expense.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Summary Card */}
      <div style={{ marginTop: '56px' }}>
        <div style={{ background: 'var(--color-ink)', color: 'white', padding: '32px 24px', borderRadius: '24px', position: 'sticky', top: '24px', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 24px 0', color: 'white' }}>Budget Summary</h3>
          
          <div style={{ marginBottom: '24px' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Total Budget</p>
            <h2 style={{ margin: 0, fontSize: '36px', fontWeight: 'bold', color: 'var(--color-gold)' }}>₹{totalBudget.toLocaleString()}</h2>
          </div>
          
          {/* Progress Bar */}
          <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', display: 'flex', overflow: 'hidden', marginBottom: '24px' }}>
            {expenses.map((expense, idx) => (
              <div key={idx} style={{ height: '100%', width: `${(expense.amount / totalBudget) * 100}%`, background: expense.color }} title={`${expense.category}: ₹${expense.amount.toLocaleString()}`} />
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Total Estimated Cost</span>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>₹{totalSpent.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Remaining Balance</span>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--color-gold)' }}>₹{remaining.toLocaleString()}</span>
            </div>
          </div>
          
          <button className="hover-lift" style={{ width: '100%', marginTop: '32px', padding: '14px', background: 'var(--color-gold)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Wallet size={18} />
            Adjust Budget
          </button>
        </div>
      </div>

    </div>
  );
};

const ChatTab = () => {
  const [message, setMessage] = useState('');
  
  const quickActions = [
    { label: 'Translate phrase', icon: <Globe size={14} /> },
    { label: 'Currency exchange', icon: <Coins size={14} /> },
    { label: 'Local customs', icon: <Sparkles size={14} /> }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-surface)', borderRadius: '24px', border: '1px solid var(--color-border)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '600px', boxShadow: 'var(--shadow-lg)' }}>
      {/* Chat Header */}
      <div style={{ background: 'var(--color-ink)', padding: '24px', color: 'white', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '2px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
          <Bot size={24} />
        </div>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 'bold' }}>TripMind Assistant</h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Your personal travel assistant</p>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="custom-scrollbar" style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px', background: 'var(--color-surface-2)' }}>
        
        {/* Assistant Message */}
        <div style={{ display: 'flex', gap: '12px', maxWidth: '80%' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0 }}>
            <Bot size={18} />
          </div>
          <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '0 16px 16px 16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ margin: '0 0 16px 0', fontSize: '15px', color: 'var(--color-text-primary)', lineHeight: '1.5' }}>
              Welcome! I'm here to help make your trip seamless. I can assist you with language translations, real-time currency conversions, local etiquette, or finding nearby places. What do you need help with?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {quickActions.map((action, idx) => (
                <button key={idx} className="hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--color-surface)', border: '1px solid var(--color-gold)', padding: '8px 12px', borderRadius: '999px', fontSize: '13px', fontWeight: '600', color: 'var(--color-gold-dark)', cursor: 'pointer' }}>
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Message */}
        <div style={{ display: 'flex', gap: '12px', maxWidth: '80%', alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0, fontWeight: 'bold' }}>
            P
          </div>
          <div style={{ background: 'var(--color-gold)', color: 'var(--color-text-primary)', padding: '16px', borderRadius: '16px 0 16px 16px', boxShadow: 'var(--shadow-sm)', fontWeight: '500' }}>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.5' }}>
              How do I say "Thank you, how much is this?" in the local language?
            </p>
          </div>
        </div>
        
        {/* Assistant Response */}
        <div style={{ display: 'flex', gap: '12px', maxWidth: '80%' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0 }}>
            <Bot size={18} />
          </div>
          <div style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '0 16px 16px 16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '15px', color: 'var(--color-text-primary)', lineHeight: '1.5' }}>
              In Konkani (the primary language spoken in Goa), you would say:
            </p>
            <div style={{ background: 'var(--color-surface-2)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid var(--color-gold)' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: 'var(--color-text-primary)', fontSize: '16px' }}>"Dev borem korum, hem kitlem?"</p>
              <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '13px' }}>Pronounced: Dave bo-rem ko-room, hem kit-lem?</p>
            </div>
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div style={{ padding: '20px', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: 'var(--color-surface-2)', padding: '8px 8px 8px 20px', borderRadius: '999px', border: '1px solid var(--color-border)' }}>
          <input 
            type="text" 
            placeholder="Ask your assistant anything..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '15px', color: 'var(--color-text-primary)' }}
          />
          <button className="hover-lift" title="Use Voice Input" style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
            <Mic size={20} />
          </button>
          <button className="hover-lift" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-gold)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};


export default function TripDetailPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Itinerary', 'Map', 'Places', 'Hotels', 'Budget', 'Chat'];

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Plan a Trip" />
      </aside>

      <main className="dashboard-main">
        {/* Custom transparent TopNav for hero image? Let's just use standard TopNav and then hero */}
        <TopNav title="Plan a Trip" />
        
        <div className="dashboard-content" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '32px 40px 60px' }}>
          
          {/* Hero Banner */}
          <div className="trip-detail-hero" style={{ 
            height: '240px', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            position: 'relative',
            marginBottom: '32px',
            backgroundImage: 'url(https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '32px'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))' }} />
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: 'white', padding: '4px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 800 }}>✦ AI Planned</span>
                </div>
                <h1 className="trip-hero-title" style={{ color: 'white', fontSize: '48px', fontWeight: 'bold', margin: '0 0 8px 0', letterSpacing: '-1px' }}>GOA</h1>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', fontWeight: 500, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 Days · 2 Travelers · ₹30,000 Budget · Oct 10–15</p>
              </div>
              
              <div className="trip-hero-actions" style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                <button className="hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-surface)', color: 'var(--color-text-primary)', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  <Share size={16} strokeWidth={2.5} />
                  Share
                </button>
                <button className="hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-gold)', color: 'var(--color-text-primary)', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  <Download size={16} strokeWidth={2.5} />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="responsive-tabs hide-scrollbar" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--color-border)', marginBottom: '32px' }}>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === tab ? '3px solid var(--color-gold)' : '3px solid transparent',
                  padding: '12px 20px',
                  fontSize: '15px',
                  fontWeight: activeTab === tab ? 'bold' : 500,
                  color: activeTab === tab ? 'var(--color-ink)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'Overview' && <OverviewTab />}
          {activeTab === 'Itinerary' && <ItineraryTab />}
          {activeTab === 'Map' && <MapTab />}
          {activeTab === 'Places' && <PlacesTab />}
          {activeTab === 'Hotels' && <HotelsTab />}
          {activeTab === 'Budget' && <BudgetTab />}
          {activeTab === 'Chat' && <ChatTab />}
          {!['Overview', 'Itinerary', 'Map', 'Places', 'Hotels', 'Budget', 'Chat'].includes(activeTab) && (
            <div style={{ padding: '60px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              <p>{activeTab} tab content coming soon...</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
