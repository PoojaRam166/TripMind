import React, { useState } from 'react';
import { Bell, Check, Info, AlertCircle, Calendar, Star, CheckCircle2 } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';

// Mock Data
const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: 'success',
    title: 'Trip to Goa planned successfully!',
    description: 'Your 5-day itinerary has been generated and is ready for review.',
    time: '2 mins ago',
    isRead: false,
    icon: CheckCircle2,
    color: '#4caf50'
  },
  {
    id: 2,
    type: 'warning',
    title: 'Budget Alert: Paris Trip',
    description: 'You have used 90% of your planned budget for the Paris trip.',
    time: '3 hours ago',
    isRead: false,
    icon: AlertCircle,
    color: '#ff9800'
  },
  {
    id: 3,
    type: 'info',
    title: 'New AI feature available',
    description: 'You can now ask the Travel Assistant to suggest local restaurants based on your dietary preferences.',
    time: '1 day ago',
    isRead: true,
    icon: Star,
    color: 'var(--color-gold-dark)'
  },
  {
    id: 4,
    type: 'calendar',
    title: 'Upcoming Trip Reminder',
    description: 'Your trip to Swiss Alps starts in 3 days. Don\'t forget to pack warm clothes!',
    time: '2 days ago',
    isRead: true,
    icon: Calendar,
    color: 'var(--color-text-primary)'
  }
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Notifications" />
      </aside>

      <main className="dashboard-main">
        <TopNav title="Notifications" />

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
                <div style={{ position: 'relative' }}>
                  <Bell size={32} color="var(--color-ink)" fill="var(--color-ink)" />
                  {unreadCount > 0 && (
                    <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '12px', height: '12px', background: '#e53935', borderRadius: '50%', border: '2px solid var(--color-gold)' }} />
                  )}
                </div>
              </div>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.5px' }}>
                  Notifications
                </h1>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Stay updated on your trips and alerts.
                </p>
              </div>
            </div>
            
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                style={{ 
                  position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px', 
                  background: 'var(--color-gold)', color: 'var(--color-text-primary)', padding: '10px 20px', 
                  borderRadius: '99px', border: 'none', fontWeight: 700, fontSize: '13px', cursor: 'pointer',
                  transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
                }} className="hover-lift">
                <Check size={16} /> Mark all as read
              </button>
            )}
          </div>

          {/* ── Notifications List ── */}
          <div style={{ background: 'var(--color-surface)', borderRadius: '24px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
            
            {notifications.length === 0 ? (
              <div style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                <Bell size={48} color="var(--color-border-light)" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: '0 0 8px 0' }}>All caught up!</h3>
                <p style={{ margin: 0 }}>You have no new notifications right now.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {notifications.map((notification, index) => {
                  const Icon = notification.icon;
                  return (
                    <div 
                      key={notification.id} 
                      onClick={() => markAsRead(notification.id)}
                      style={{ 
                        display: 'flex', alignItems: 'flex-start', gap: '20px', 
                        padding: '24px 32px', 
                        borderBottom: index === notifications.length - 1 ? 'none' : '1px solid var(--color-border-light)',
                        background: notification.isRead ? 'transparent' : 'rgba(212, 175, 55, 0.04)',
                        transition: 'background 0.2s',
                        cursor: 'pointer'
                      }} 
                      className="hover:bg-gray-50"
                    >
                      {/* Icon */}
                      <div style={{ 
                        width: '48px', height: '48px', borderRadius: '50%', 
                        background: notification.isRead ? 'var(--color-surface-2)' : 'white', 
                        border: notification.isRead ? 'none' : '1px solid var(--color-border-light)',
                        boxShadow: notification.isRead ? 'none' : '0 4px 12px rgba(0,0,0,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                      }}>
                        <Icon size={20} color={notification.color} />
                      </div>
                      
                      {/* Content */}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: notification.isRead ? 600 : 800, color: 'var(--color-text-primary)' }}>
                            {notification.title}
                          </h4>
                          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-muted)', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                            {notification.time}
                          </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                          {notification.description}
                        </p>
                      </div>

                      {/* Unread Indicator */}
                      {!notification.isRead && (
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0, marginTop: '6px' }} />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
