import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Plane, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: 'demo@tripmind.com', password: 'password123'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginStatus('loading');
    setTimeout(() => {
      setLoginStatus('success');
      setTimeout(() => {
        navigate('/home');
      }, 500);
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
          <h1 style={{ fontSize: '56px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>Welcome back to your adventures.</h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.5 }}>Pick up exactly where you left off. The world is waiting for you.</p>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="auth-premium-right" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-surface)', padding: '48px' }}>
        <div className="auth-premium-glass" style={{ width: '100%', maxWidth: '440px', background: 'var(--color-surface)', padding: '48px', borderRadius: '24px', boxShadow: '0 24px 48px rgba(0,0,0,0.05)', border: '1px solid var(--color-border-light)' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px', color: (typeof loginStatus !== 'undefined' && loginStatus === 'success') || (typeof registerStatus !== 'undefined' && registerStatus === 'success') || (typeof status !== 'undefined' && status === 'loading') ? 'var(--color-gold)' : 'var(--color-text-primary)', letterSpacing: '-0.5px' }}>Log in</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', fontSize: '15px' }}>Enter your details to access your trips.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                  placeholder="••••••••"
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
              <div style={{ textAlign: 'right', marginTop: '12px' }}>
                <Link to="/forgot-password" style={{ fontSize: '13px', color: 'var(--color-gold-dark)', textDecoration: 'none', fontWeight: 700 }}>Forgot password?</Link>
              </div>
            </div>

            <button type="submit" disabled={loginStatus === 'loading'} style={{ width: '100%', marginTop: '16px', padding: '16px', fontSize: '16px', borderRadius: '999px', background: loginStatus === 'success' ? 'var(--color-ink)' : 'var(--color-gold)', color: (typeof loginStatus !== 'undefined' && loginStatus === 'success') || (typeof registerStatus !== 'undefined' && registerStatus === 'success') || (typeof status !== 'undefined' && status === 'loading') ? 'var(--color-gold)' : 'var(--color-text-primary)', fontWeight: 800, border: 'none', cursor: loginStatus === 'loading' ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', boxShadow: loginStatus === 'success' ? '0 8px 24px rgba(0, 0, 0, 0.2)' : '0 8px 24px rgba(212, 175, 55, 0.3)', transition: 'all 0.3s' }} className="hover-lift">
              {loginStatus === 'loading' ? 'Logging in...' : loginStatus === 'success' ? 'Success!' : (
                <>Log in <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
            Don't have an account? <Link to="/register" style={{ color: (typeof loginStatus !== 'undefined' && loginStatus === 'success') || (typeof registerStatus !== 'undefined' && registerStatus === 'success') || (typeof status !== 'undefined' && status === 'loading') ? 'var(--color-gold)' : 'var(--color-text-primary)', fontWeight: 800, textDecoration: 'none' }}>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
