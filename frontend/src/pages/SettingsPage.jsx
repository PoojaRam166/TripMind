import React, { useState, useRef, useEffect } from 'react';
import { Settings, User, Bell, Shield, Key, Moon, Globe, LogOut, Check, ChevronDown, CreditCard } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';

const LANGUAGES = [
  "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Basque", "Belarusian", "Bengali", "Bosnian", "Bulgarian", "Catalan", "Cebuano", "Chichewa", "Chinese (Simplified)", "Chinese (Traditional)", "Corsican", "Croatian", "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian", "Filipino", "Finnish", "French", "Frisian", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kinyarwanda", "Korean", "Kurdish (Kurmanji)", "Kyrgyz", "Lao", "Latin", "Latvian", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian", "Myanmar (Burmese)", "Nepali", "Norwegian", "Odia (Oriya)", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Romanian", "Russian", "Samoan", "Scots Gaelic", "Serbian", "Sesotho", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh", "Xhosa", "Yiddish", "Yoruba", "Zulu"
];

const CURRENCIES = [
  "AED (د.إ)", "AFN (؋)", "ALL (L)", "AMD (֏)", "ANG (ƒ)", "AOA (Kz)", "ARS ($)", "AUD ($)", "AWG (ƒ)", "AZN (₼)", "BAM (KM)", "BBD ($)", "BDT (৳)", "BGN (лв)", "BHD (.د.ب)", "BIF (Fr)", "BMD ($)", "BND ($)", "BOB (Bs.)", "BRL (R$)", "BSD ($)", "BTN (Nu.)", "BWP (P)", "BYN (Br)", "BZD ($)", "CAD ($)", "CDF (Fr)", "CHF (Fr)", "CLP ($)", "CNY (¥)", "COP ($)", "CRC (₡)", "CUC ($)", "CUP ($)", "CVE ($)", "CZK (Kč)", "DJF (Fr)", "DKK (kr)", "DOP (RD$)", "DZD (د.ج)", "EGP (£)", "ERN (Nfk)", "ETB (Br)", "EUR (€)", "FJD ($)", "FKP (£)", "GBP (£)", "GEL (₾)", "GHS (₵)", "GIP (£)", "GMD (D)", "GNF (Fr)", "GTQ (Q)", "GYD ($)", "HKD ($)", "HNL (L)", "HRK (kn)", "HTG (G)", "HUF (Ft)", "IDR (Rp)", "ILS (₪)", "INR (₹)", "IQD (ع.د)", "IRR (﷼)", "ISK (kr)", "JMD ($)", "JOD (د.ا)", "JPY (¥)", "KES (Sh)", "KGS (с)", "KHR (៛)", "KMF (Fr)", "KPW (₩)", "KRW (₩)", "KWD (د.ك)", "KYD ($)", "KZT (₸)", "LAK (₭)", "LBP (ل.ل)", "LKR (Rs)", "LRD ($)", "LSL (L)", "LYD (ل.د)", "MAD (د.م.)", "MDL (L)", "MGA (Ar)", "MKD (ден)", "MMK (Ks)", "MNT (₮)", "MOP (P)", "MRU (UM)", "MUR (₨)", "MVR (MVR)", "MWK (MK)", "MXN ($)", "MYR (RM)", "MZN (MT)", "NAD ($)", "NGN (₦)", "NIO (C$)", "NOK (kr)", "NPR (₨)", "NZD ($)", "OMR (ر.ع.)", "PAB (B/.)", "PEN (S/.)", "PGK (K)", "PHP (₱)", "PKR (₨)", "PLN (zł)", "PYG (₲)", "QAR (ر.ق)", "RON (lei)", "RSD (дин)", "RUB (₽)", "RWF (Fr)", "SAR (ر.س)", "SBD ($)", "SCR (₨)", "SDG (ج.س.)", "SEK (kr)", "SGD ($)", "SHP (£)", "SLL (Le)", "SOS (Sh)", "SRD ($)", "SSP (£)", "STN (Db)", "SYP (£)", "SZL (L)", "THB (฿)", "TJS (ЅМ)", "TMT (m)", "TND (د.ت)", "TOP (T$)", "TRY (₺)", "TTD ($)", "TWD (NT$)", "TZS (Sh)", "UAH (₴)", "UGX (Sh)", "USD ($)", "UYU ($)", "UZS (so'm)", "VES (Bs.S)", "VND (₫)", "VUV (Vt)", "WST (T)", "XAF (Fr)", "XCD ($)", "XOF (Fr)", "XPF (Fr)", "YER (﷼)", "ZAR (R)", "ZMW (ZK)", "ZWL ($)"
];

const CustomSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = options.filter(o => o.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: isOpen ? '1px solid var(--color-gold)' : '1px solid var(--color-border)', fontSize: '14px', background: 'var(--color-surface)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'border-color 0.2s' }}
      >
        <span style={{ color: value ? 'var(--color-ink)' : 'var(--color-text-muted)' }}>{value || placeholder}</span>
        <ChevronDown size={16} color="var(--color-text-secondary)" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </div>
      {isOpen && (
        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, width: '100%', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '12px', boxShadow: 'var(--shadow-md)', zIndex: 50, maxHeight: '250px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '8px', borderBottom: '1px solid var(--color-border-light)' }}>
            <input 
              autoFocus
              type="text" 
              placeholder="Search language..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--color-border-light)', fontSize: '13px', outline: 'none', background: 'var(--color-surface-2)' }}
            />
          </div>
          <div style={{ overflowY: 'auto', flex: 1, padding: '4px' }} className="custom-scrollbar">
            {filtered.map(opt => (
              <div 
                key={opt}
                onClick={() => { onChange(opt); setIsOpen(false); setSearchTerm(''); }}
                style={{ padding: '10px 12px', fontSize: '14px', cursor: 'pointer', borderRadius: '8px', background: opt === value ? 'var(--color-surface-2)' : 'transparent', color: opt === value ? 'var(--color-gold-dark)' : 'var(--color-ink)', fontWeight: opt === value ? 600 : 400 }}
                className="hover:bg-gray-50"
              >
                {opt}
              </div>
            ))}
            {filtered.length === 0 && <div style={{ padding: '10px 12px', fontSize: '13px', color: 'var(--color-text-muted)', textAlign: 'center' }}>No results found</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('INR (₹)');
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus(null), 2000);
    }, 800);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'billing', label: 'Billing & Subscription', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'preferences', label: 'Preferences', icon: Globe },
  ];

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Settings" />
      </aside>

      <main className="dashboard-main">
        <TopNav title="Settings" />

        <div className="dashboard-content" style={{ padding: '32px 48px', width: '100%', maxWidth: '1800px', margin: '0 auto' }}>
          
          {/* ── Hero Banner ── */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)',
            padding: '32px 40px',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.1)'
          }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Settings size={32} color="var(--color-ink)" fill="var(--color-ink)" />
              </div>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.5px' }}>
                  Settings
                </h1>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Manage your account preferences and configurations.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '32px' }}>
            
            {/* ── Sidebar Tabs ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '12px 16px', borderRadius: '12px',
                      background: isActive ? 'var(--color-gold-muted)' : 'transparent',
                      color: isActive ? 'var(--color-gold-dark)' : 'var(--color-text-secondary)',
                      border: isActive ? '1px solid var(--color-gold)' : '1px solid transparent',
                      fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                      textAlign: 'left', transition: 'all 0.2s'
                    }}
                    className={!isActive ? "hover:bg-gray-50" : ""}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* ── Tab Content ── */}
            <div style={{ background: 'var(--color-surface)', borderRadius: '24px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', padding: '32px' }}>
              
              {activeTab === 'account' && (
                <div>
                  <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Account Information</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-gold)', color: 'var(--color-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 800, overflow: 'hidden' }}>
                      {profilePic ? (
                        <img src={profilePic} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        "P"
                      )}
                    </div>
                    <div>
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        accept="image/*" 
                        style={{ display: 'none' }} 
                      />
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="btn btn-sm hover-lift"
                        style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', marginBottom: '8px' }}
                      >
                        Upload new picture
                      </button>
                      <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>JPG, GIF or PNG. Max size of 800K.</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>First Name</label>
                      <input type="text" defaultValue="Poojitha" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '14px', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Last Name</label>
                      <input type="text" defaultValue="Reddy" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '14px', outline: 'none' }} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '32px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Email Address</label>
                    <input type="email" defaultValue="poojitha@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '14px', outline: 'none' }} />
                  </div>

                  <div style={{ padding: '24px', background: 'var(--color-surface-2)', borderRadius: '16px', border: '1px solid var(--color-border)', marginBottom: '32px' }}>
                    <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 'bold' }}>Connected Accounts</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>G</div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '14px' }}>Google</div>
                          <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Connected</div>
                        </div>
                      </div>
                      <button className="btn btn-sm btn-hover-gold">Disconnect</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', background: '#000', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>A</div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '14px' }}>Apple</div>
                          <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Not connected</div>
                        </div>
                      </div>
                      <button className="btn btn-sm btn-hover-gold">Connect</button>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '24px', borderTop: '1px solid var(--color-border-light)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      {saveStatus === 'saved' && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-ink)', fontSize: '14px', fontWeight: 600 }}>
                          <Check size={16} /> Saved!
                        </span>
                      )}
                      <button 
                        onClick={handleSave}
                        disabled={saveStatus === 'saving'}
                        className="btn btn-champ btn-md hover-lift"
                        style={{ opacity: saveStatus === 'saving' ? 0.7 : 1, cursor: saveStatus === 'saving' ? 'not-allowed' : 'pointer' }}
                      >
                        {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'billing' && (
                <div>
                  <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Billing & Subscription</h3>
                  
                  <div style={{ background: 'linear-gradient(to right, #111, #333)', color: 'white', padding: '32px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                    <div>
                      <div style={{ display: 'inline-block', background: 'var(--color-gold)', color: 'var(--color-ink)', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Active Plan</div>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 900 }}>TripMind Pro</h4>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Unlimited AI itineraries & premium recommendations.</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '28px', fontWeight: 800 }}>$9<span style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>/mo</span></div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>Renews Oct 24, 2026</div>
                    </div>
                  </div>

                  <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 'bold' }}>Payment Method</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', border: '1px solid var(--color-border)', borderRadius: '16px', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '48px', height: '32px', background: '#f3f4f6', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#1a1f36', fontSize: '12px' }}>VISA</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '14px' }}>Visa ending in 4242</div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Expires 12/28</div>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-hover-gold">Update</button>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Notification Preferences</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px' }}>Email Notifications</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Receive emails about your trip updates.</div>
                      </div>
                      <div onClick={() => setNotificationsEnabled(!notificationsEnabled)} style={{ width: '44px', height: '24px', background: notificationsEnabled ? 'var(--color-gold)' : 'var(--color-border)', borderRadius: '99px', position: 'relative', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div style={{ position: 'absolute', top: '2px', left: notificationsEnabled ? '22px' : '2px', width: '20px', height: '20px', background: 'var(--color-surface)', borderRadius: '50%', transition: 'all 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                      </div>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid var(--color-border-light)', margin: 0 }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px' }}>Push Notifications</div>
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Receive alerts in your browser.</div>
                      </div>
                      <div onClick={() => setPushEnabled(!pushEnabled)} style={{ width: '44px', height: '24px', background: pushEnabled ? 'var(--color-gold)' : 'var(--color-border)', borderRadius: '99px', position: 'relative', cursor: 'pointer', transition: 'all 0.2s' }}>
                        <div style={{ position: 'absolute', top: '2px', left: pushEnabled ? '22px' : '2px', width: '20px', height: '20px', background: 'var(--color-surface)', borderRadius: '50%', transition: 'all 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div>
                  <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Privacy & Security</h3>
                  
                  <div style={{ padding: '24px', background: 'var(--color-surface-2)', borderRadius: '16px', border: '1px solid var(--color-border)', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}><Shield size={18} color="var(--color-gold-dark)" /> Two-Factor Authentication</div>
                      <span style={{ padding: '4px 10px', background: '#dcfce7', color: '#166534', fontSize: '12px', fontWeight: 700, borderRadius: '99px' }}>Enabled</span>
                    </div>
                    <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: 'var(--color-text-secondary)' }}>Add an extra layer of security to your account.</p>
                    <button className="btn btn-sm btn-hover-gold">Manage 2FA</button>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px' }}>Change Password</div>
                    
                    {!isUpdatingPassword ? (
                      <button 
                        onClick={() => setIsUpdatingPassword(true)}
                        style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)', padding: '10px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} 
                        className="hover:bg-gray-100"
                      >
                        <Key size={16} /> Update Password
                      </button>
                    ) : (
                      <div style={{ background: 'var(--color-surface-2)', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Current Password</label>
                            <input type="password" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '14px', outline: 'none' }} />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>New Password</label>
                            <input type="password" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '14px', outline: 'none' }} />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Confirm New Password</label>
                            <input type="password" style={{ width: '100%', padding: '10px 16px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '14px', outline: 'none' }} />
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button 
                            onClick={() => setIsUpdatingPassword(false)}
                            style={{ background: 'var(--color-gold)', color: 'var(--color-ink)', border: 'none', padding: '10px 20px', borderRadius: '99px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}
                            className="hover-lift"
                          >
                            Save Password
                          </button>
                          <button 
                            onClick={() => setIsUpdatingPassword(false)}
                            style={{ background: 'transparent', color: 'var(--color-text-secondary)', border: 'none', padding: '10px 20px', borderRadius: '99px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                            className="hover:bg-gray-200"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div>
                  <h3 style={{ margin: '0 0 24px 0', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>General Preferences</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Language</label>
                      <CustomSelect 
                        options={LANGUAGES}
                        value={language}
                        onChange={setLanguage}
                        placeholder="Select a language"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Currency</label>
                      <CustomSelect 
                        options={CURRENCIES}
                        value={currency}
                        onChange={setCurrency}
                        placeholder="Select a currency"
                      />
                    </div>
                  </div>


                  <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '24px', borderTop: '1px solid var(--color-border-light)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      {saveStatus === 'saved' && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-ink)', fontSize: '14px', fontWeight: 600 }}>
                          <Check size={16} /> Saved!
                        </span>
                      )}
                      <button 
                        onClick={handleSave}
                        disabled={saveStatus === 'saving'}
                        className="btn btn-champ btn-md hover-lift"
                        style={{ opacity: saveStatus === 'saving' ? 0.7 : 1, cursor: saveStatus === 'saving' ? 'not-allowed' : 'pointer' }}
                      >
                        {saveStatus === 'saving' ? 'Saving...' : 'Save Preferences'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
