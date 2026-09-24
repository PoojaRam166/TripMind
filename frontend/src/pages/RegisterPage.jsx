import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Plane, ArrowRight, Eye, EyeOff } from 'lucide-react';
import CustomSelect from '../components/CustomSelect';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '',
    city: '', travelStyle: '', travelCompanion: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target ? e.target.name : e.name;
    const value = e.target ? e.target.value : e.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.travelStyle) {
      alert('Please select a Travel Style.');
      return;
    }
    if (!formData.travelCompanion) {
      alert('Please select who you usually travel with.');
      return;
    }

    setRegisterStatus('loading');
    setTimeout(() => {
      setRegisterStatus('success');
      setTimeout(() => navigate('/home'), 500);
    }, 1500);
  };

  return (
    <div className="auth-premium-layout" style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-ink)', fontFamily: "'Inter', sans-serif" }}>
      {/* Left side: Premium Branding */}
      <div className="auth-premium-left" style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '48px', color: 'white', background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white', zIndex: 10, width: 'fit-content' }}>
          <div style={{ width: 40, height: 40, background: 'var(--color-gold)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(212,175,55,0.3)' }}>
            <Plane size={24} color="var(--color-ink)" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.5px' }}>TripMind</span>
        </Link>

        <div style={{ marginTop: 'auto', marginBottom: 'auto', zIndex: 10, maxWidth: '480px' }}>
          <h1 style={{ fontSize: '56px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>Your next trip starts with one idea.</h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.5 }}>Join thousands of travellers planning smarter with TripMind.</p>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="auth-premium-right" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-surface)', padding: '48px', overflowY: 'auto' }}>
        <div className="auth-premium-glass" style={{ width: '100%', maxWidth: '480px', background: 'var(--color-surface)', padding: '48px', borderRadius: '24px', boxShadow: '0 24px 48px rgba(0,0,0,0.05)', border: '1px solid var(--color-border-light)' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px', color: (typeof loginStatus !== 'undefined' && loginStatus === 'success') || (typeof registerStatus !== 'undefined' && registerStatus === 'success') || (typeof status !== 'undefined' && status === 'loading') ? 'var(--color-gold)' : 'var(--color-text-primary)', letterSpacing: '-0.5px' }}>Create an account</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', fontSize: '15px' }}>Start planning your dream trip for free.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-secondary)' }}>Full name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-secondary)' }}>Email address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-secondary)' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  style={{ width: '100%', padding: '14px 48px 14px 16px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-secondary)' }}>Home city (Optional)</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Mumbai, Delhi" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 140px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-secondary)' }}>Travel Style</label>
                <CustomSelect
                  name="travelStyle"
                  value={formData.travelStyle}
                  onChange={(val) => setFormData({ ...formData, travelStyle: val })}
                  placeholder="Select style..."
                  options={[
                    { value: 'adventure', label: 'Adventure' },
                    { value: 'relaxation', label: 'Relaxation' },
                    { value: 'culture', label: 'Culture & History' },
                    { value: 'food', label: 'Food & Drink' }
                  ]}
                />
              </div>
              <div style={{ flex: '1 1 140px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-secondary)' }}>Usually travel</label>
                <CustomSelect
                  name="travelCompanion"
                  value={formData.travelCompanion}
                  onChange={(val) => setFormData({ ...formData, travelCompanion: val })}
                  placeholder="Select companion..."
                  options={[
                    { value: 'solo', label: 'Solo' },
                    { value: 'couple', label: 'As a Couple' },
                    { value: 'family', label: 'With Family' },
                    { value: 'friends', label: 'With Friends' }
                  ]}
                />
              </div>
            </div>

            <button type="submit" disabled={registerStatus === 'loading'} style={{ width: '100%', marginTop: '16px', padding: '16px', fontSize: '16px', borderRadius: '999px', background: registerStatus === 'success' ? 'var(--color-ink)' : 'var(--color-gold)', color: (typeof loginStatus !== 'undefined' && loginStatus === 'success') || (typeof registerStatus !== 'undefined' && registerStatus === 'success') || (typeof status !== 'undefined' && status === 'loading') ? 'var(--color-gold)' : 'var(--color-text-primary)', fontWeight: 800, border: 'none', cursor: registerStatus === 'loading' ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', boxShadow: registerStatus === 'success' ? '0 8px 24px rgba(0, 0, 0, 0.2)' : '0 8px 24px rgba(212, 175, 55, 0.3)', transition: 'all 0.3s' }} className="hover-lift">
              {registerStatus === 'loading' ? 'Creating account...' : registerStatus === 'success' ? 'Success!' : (
                <>Create Account <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
            Already have an account? <Link to="/login" style={{ color: (typeof loginStatus !== 'undefined' && loginStatus === 'success') || (typeof registerStatus !== 'undefined' && registerStatus === 'success') || (typeof status !== 'undefined' && status === 'loading') ? 'var(--color-gold)' : 'var(--color-text-primary)', fontWeight: 800, textDecoration: 'none' }}>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
