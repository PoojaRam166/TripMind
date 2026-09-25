import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Minus,
  Check,
  Loader2,
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';

// Reusable components
const SectionCard = ({ title, icon, children }) => (
  <div style={{
    background: 'var(--color-surface)',
    borderRadius: '20px',
    padding: '28px 32px',
    border: '1px solid var(--color-border-light)',
    borderLeft: '4px solid var(--color-gold)',
    boxShadow: 'var(--shadow-sm)',
    marginBottom: '20px',
    transition: 'box-shadow 0.2s ease',
  }}>
    <h3 style={{
      fontSize: '16px',
      fontWeight: 700,
      color: 'var(--color-text-primary)',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }}>
      <span style={{ color: 'var(--color-gold-dark)' }}>{icon}</span>
      {title}
    </h3>
    {children}
  </div>
);

const PillGroup = ({ options, selected, onChange }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
    {options.map(opt => {
      const isSelected = selected.includes(opt);
      return (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          type="button"
          style={{
            background: isSelected ? 'var(--color-gold-muted)' : 'white',
            color: isSelected ? 'var(--color-gold-dark)' : 'var(--color-text-secondary)',
            border: `1px solid ${isSelected ? 'var(--color-gold)' : 'var(--color-border-light)'}`,
            padding: '8px 16px',
            borderRadius: '999px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            if (!isSelected) e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
          onMouseOut={(e) => {
            if (!isSelected) e.currentTarget.style.borderColor = 'var(--color-border-light)';
          }}
        >
          {opt}
        </button>
      );
    })}
  </div>
);

export default function PlanTripPage() {
  const navigate = useNavigate();
  const [viewState, setViewState] = useState('form'); // 'form', 'loading', 'success'
  
  const [prompt, setPrompt] = useState('Plan a 5-day Goa trip for 2 people under ₹30,000 with beaches, food and relaxed activities.');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState('');

  const [travelStyles, setTravelStyles] = useState(['Relaxed']);
  const [interests, setInterests] = useState(['Beaches', 'Food']);
  const [transport, setTransport] = useState(['Flight']);
  const [accommodation, setAccommodation] = useState(['Hotel']);

  const toggleArrayItem = (arr, setArr, item) => {
    if (arr.includes(item)) setArr(arr.filter(i => i !== item));
    else setArr([...arr, item]);
  };

  const handleCreateTrip = () => {
    setViewState('loading');
  };

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState(0);

  const agents = [
    { name: 'Destination Agent', desc: 'Finding places and experiences' },
    { name: 'Budget Agent', desc: 'Checking estimated costs' },
    { name: 'Hotel Agent', desc: 'Comparing accommodation options' },
    { name: 'Itinerary Agent', desc: 'Organizing your daily schedule' },
    { name: 'Route Agent', desc: 'Optimizing travel routes' },
    { name: 'Validation Agent', desc: 'Checking time, budget and preferences' }
  ];

  useEffect(() => {
    if (viewState === 'loading') {
      let currentStep = 0;
      let progress = 0;
      
      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 2;
        if (progress > 100) progress = 100;
        
        setLoadingProgress(progress);
        
        // Advance step based on progress
        const expectedStep = Math.floor((progress / 100) * agents.length);
        if (expectedStep !== currentStep && expectedStep <= agents.length) {
          currentStep = expectedStep;
          setLoadingStep(currentStep);
        }

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => setViewState('success'), 600);
        }
      }, 300);

      return () => clearInterval(interval);
    }
  }, [viewState]);


  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Plan a Trip" />
      </aside>

      <main className="dashboard-main">
        <TopNav title="Plan a Trip" />

        <div className="dashboard-content" style={{ maxWidth: '1800px', margin: '0 auto', width: '100%', padding: '32px 48px 60px' }}>

          {viewState === 'form' && (
            <>
              {/* ── Gold Hero Banner — detached card style ── */}
              <div style={{
                background: 'linear-gradient(135deg, var(--color-ink) 0%, #1c1500 55%, #2e2000 100%)',
                padding: '48px 40px 52px',
                margin: '0 0 32px 0',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: '-30px', right: '-20px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '-50px', left: '30%', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: '10px', right: '25%', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,174,120,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={19} color="var(--color-ink)" />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>AI Trip Planner</span>
                  </div>
                  <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: 'white', margin: '0 0 10px', letterSpacing: '-1px', lineHeight: 1.1 }}>
                    Plan your perfect trip
                  </h1>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', margin: 0, fontWeight: 500 }}>
                    Tell TripMind what you want, and we will organize the details.
                  </p>
                </div>
              </div>

              <SectionCard title="Describe your dream trip" icon={<Sparkles size={16} />}>
                <div style={{ position: 'relative', marginBottom: '16px' }}>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'var(--color-surface-2)',
                      border: '1px solid var(--color-border-light)',
                      borderRadius: '16px',
                      padding: '16px 48px 48px 16px',
                      minHeight: '120px',
                      fontSize: '15px',
                      color: 'var(--color-text-primary)',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="e.g. A 4-day trip to Goa under ₹30k"
                    onFocus={e => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-border-light)'}
                  />
                  <button 
                    onClick={handleCreateTrip}
                    disabled={!prompt}
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      background: prompt ? 'var(--color-gold)' : 'var(--color-surface)',
                      color: prompt ? 'var(--color-ink)' : 'var(--color-text-muted)',
                      border: prompt ? 'none' : '1px solid var(--color-border)',
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: prompt ? 'pointer' : 'not-allowed',
                      transition: 'all 0.2s',
                      boxShadow: prompt ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                    }}
                    className="hover-lift"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
                
                <PillGroup 
                  options={['Plan a budget weekend trip', 'Create a family vacation', 'Plan a romantic getaway', 'Find an adventure destination', 'Plan a food-focused trip']}
                  selected={[]}
                  onChange={(opt) => setPrompt(opt)}
                />
              </SectionCard>

              <SectionCard title="Trip details" icon={<MapPin size={16} />}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), ))', gap: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Destination</label>
                    <input
                      type="text"
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                      placeholder="Where do you want to go?"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid var(--color-border)', fontSize: '14px', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Dates</label>
                    <input
                      type="text"
                      value={dates}
                      onChange={e => setDates(e.target.value)}
                      placeholder="Oct 10 - 15, 2026"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid var(--color-border)', fontSize: '14px', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Travelers</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button
                        onClick={() => setTravelers(Math.max(1, travelers - 1))}
                        style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-gold-muted)', cursor: 'pointer' }}>
                        <Minus size={16} color="var(--color-gold-dark)" />
                      </button>
                      <span style={{ fontSize: '18px', fontWeight: 800, minWidth: '24px', textAlign: 'center', color: 'var(--color-text-primary)' }}>{travelers}</span>
                      <button
                        onClick={() => setTravelers(travelers + 1)}
                        style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-gold-muted)', cursor: 'pointer' }}>
                        <Plus size={16} color="var(--color-gold-dark)" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Budget (₹)</label>
                    <input
                      type="text"
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                      placeholder="30,000"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid var(--color-border)', fontSize: '14px', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Travel style">
                <PillGroup 
                  options={['Relaxed', 'Adventure', 'Luxury', 'Budget', 'Family', 'Solo', 'Romantic', 'Backpacking']}
                  selected={travelStyles}
                  onChange={(item) => toggleArrayItem(travelStyles, setTravelStyles, item)}
                />
              </SectionCard>

              <SectionCard title="Interests">
                <PillGroup 
                  options={['Beaches', 'Nature', 'Food', 'Culture', 'Shopping', 'Nightlife', 'History', 'Photography', 'Wildlife', 'Wellness']}
                  selected={interests}
                  onChange={(item) => toggleArrayItem(interests, setInterests, item)}
                />
              </SectionCard>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), ))', gap: '24px', marginBottom: '40px' }}>
                <SectionCard title="Transport">
                  <PillGroup 
                    options={['Flight', 'Train', 'Bus', 'Car', 'Flexible']}
                    selected={transport}
                    onChange={(item) => toggleArrayItem(transport, setTransport, item)}
                  />
                </SectionCard>
                <SectionCard title="Accommodation">
                  <PillGroup 
                    options={['Hotel', 'Hostel', 'Resort', 'Apartment', 'Homestay']}
                    selected={accommodation}
                    onChange={(item) => toggleArrayItem(accommodation, setAccommodation, item)}
                  />
                </SectionCard>
              </div>

              <button 
                onClick={handleCreateTrip}
                className="btn btn-champ hover-lift"
                style={{ width: '100%', padding: '16px', fontSize: '18px', borderRadius: '16px', marginBottom: '60px' }}
              >
                <Plus size={20} /> Create My Trip
              </button>
            </>
          )}

          {(viewState === 'loading' || viewState === 'success') && (
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px 0 60px' }}>
              
              {/* Progress Header */}
              <div style={{ background: 'var(--color-surface)', borderRadius: '24px', padding: '24px 32px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-gold-dark)' }}>
                    {viewState === 'success' ? 'Trip generation complete!' : (loadingStep < agents.length ? agents[loadingStep].desc + '...' : 'Finalizing...')}
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{loadingProgress}%</span>
                </div>
                
                <div style={{ height: '8px', background: 'var(--color-surface-2)', borderRadius: '4px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div style={{ 
                    height: '100%', 
                    background: 'var(--color-gold)', 
                    width: `${loadingProgress}%`,
                    transition: 'width 0.3s ease-out'
                  }} />
                </div>
                
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  {viewState === 'success' ? 'Done' : 'Estimated time: ~1s remaining'}
                </div>
              </div>

              {/* Agent Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {agents.map((agent, index) => {
                  const isComplete = loadingStep > index || viewState === 'success';
                  const isActive = loadingStep === index && viewState !== 'success';
                  
                  return (
                    <div key={agent.name} style={{
                      background: isComplete ? 'var(--color-surface)' : (isActive ? 'var(--color-gold-muted)' : 'var(--color-surface-2)'),
                      border: `1px solid ${isComplete ? 'var(--color-border)' : (isActive ? 'var(--color-gold)' : 'var(--color-border-light)')}`,
                      borderRadius: '16px',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ 
                          width: '10px', height: '10px', borderRadius: '50%', 
                          background: isComplete ? 'var(--color-ink)' : (isActive ? 'var(--color-gold)' : 'var(--color-text-secondary)'),
                          opacity: (isComplete || isActive) ? 1 : 0.3
                        }} />
                        <div>
                          <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 600, color: 'var(--color-text-primary)' }}>{agent.name}</h4>
                          <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)' }}>{agent.desc}</p>
                        </div>
                      </div>
                      
                      <div>
                        {isComplete && <Check size={20} color="var(--color-ink)" />}
                        {isActive && <Loader2 size={20} color="var(--color-gold-dark)" className="spin-animation" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {viewState === 'success' ? (
                <div style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '24px',
                  padding: '32px'
                }}>
                  <h3 style={{ color: 'var(--color-text-primary)', fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={20} color="var(--color-gold-dark)" /> Trip successfully planned
                  </h3>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {['5-day Goa itinerary created', 'Sea Breeze Resort booked · ₹12,000/night', 'Budget: ₹28,500 / ₹30,000 (5% under)', '6 activities across 5 days', 'Routes optimized for travel time'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                        <Check size={16} color="var(--color-gold-dark)" style={{ marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <button 
                      onClick={() => navigate('/trip/1')}
                      className="btn btn-primary btn-md hover-lift"
                      style={{ padding: '12px 24px', borderRadius: '12px' }}
                    >
                      View My Trip <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={() => setViewState('form')}
                      className="btn hover-lift"
                      style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)', padding: '12px 24px', borderRadius: '12px' }}
                    >
                      Edit Preferences
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <button 
                    onClick={() => setViewState('form')}
                    style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}
                  >
                    Cancel planning
                  </button>
                </div>
              )}

            </div>
          )}

        </div>{/* end dashboard-content */}
      </main>
    </div>
  );
}
