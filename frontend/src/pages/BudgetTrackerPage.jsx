import React, { useState } from 'react';
import { CreditCard, Plus, PieChart, TrendingUp, DollarSign, Coffee, Home, Plane, Map } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';

// Mock Data
const TOTAL_BUDGET = 50000;
const INITIAL_EXPENSES = [
  { id: 1, title: 'Flight Tickets', category: 'Transport', amount: 12000, date: '2024-03-12', icon: Plane },
  { id: 2, title: 'Hotel Booking', category: 'Accommodation', amount: 15000, date: '2024-03-13', icon: Home },
  { id: 3, title: 'Dinner at Beach Shack', category: 'Food', amount: 2500, date: '2024-03-15', icon: Coffee },
  { id: 4, title: 'Scuba Diving', category: 'Activities', amount: 4000, date: '2024-03-16', icon: Map },
];

export default function BudgetTrackerPage() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
  const remaining = TOTAL_BUDGET - totalSpent;
  const spentPercentage = Math.min((totalSpent / TOTAL_BUDGET) * 100, 100);

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Budget Tracker" />
      </aside>

      <main className="dashboard-main">
        <TopNav title="Budget Tracker" />

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
                <CreditCard size={32} color="var(--color-ink)" fill="var(--color-ink)" />
              </div>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.5px' }}>
                  Trip Budget
                </h1>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Goa Trip · Oct 10–15, 2026
                </p>
              </div>
            </div>
            
            <button style={{ 
              position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px', 
              background: 'var(--color-gold)', color: 'var(--color-text-primary)', padding: '12px 24px', 
              borderRadius: '99px', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
              transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
            }} className="hover-lift">
              <Plus size={18} /> Add Expense
            </button>
          </div>

          {/* ── Summary Cards ── */}
          <div className="budget-summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
            {/* Total Budget */}
            <div style={{ background: 'linear-gradient(145deg, #fffbeb, #fde68a)', padding: '24px', borderRadius: '16px', border: '1px solid #fcd34d', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                Total Budget
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--color-text-primary)', margin: 0 }}>
                ₹30,000
              </h2>
            </div>

            {/* Estimated Cost */}
            <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                Estimated Cost
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--color-gold-dark)', margin: 0 }}>
                ₹38,000
              </h2>
            </div>

            {/* Remaining */}
            <div style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                Remaining
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#e53935', margin: 0 }}>
                ₹-8,000
              </h2>
            </div>
          </div>

          {/* ── Budget Used Progress ── */}
          <div style={{ background: 'var(--color-surface)', padding: '24px 32px', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Budget used</h3>
              <span style={{ fontSize: '16px', fontWeight: 900, color: 'var(--color-text-primary)' }}>127%</span>
            </div>
            
            <div style={{ position: 'relative', width: '100%', height: '8px', background: 'var(--color-surface-2)', borderRadius: '99px', overflow: 'hidden', marginBottom: '8px' }}>
              <div style={{ width: '100%', height: '100%', background: 'var(--color-gold)', borderRadius: '99px' }} />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 500 }}>
              <span>₹0</span>
              <span>₹30,000</span>
            </div>
          </div>

          {/* ── Two Columns ── */}
          <div className="budget-main-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
            
            {/* Category Breakdown */}
            <div style={{ background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Category breakdown</h3>
                <button className="btn btn-champ btn-sm hover-lift" style={{ padding: '10px 20px' }}>
                  <Plus size={16} /> Add expense
                </button>
              </div>

              {/* Table Header */}
              <div className="budget-table-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', paddingBottom: '16px', borderBottom: '1px solid var(--color-border-light)', fontSize: '12px', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <div>Category</div>
                <div>Planned</div>
                <div>Actual</div>
                <div>Difference</div>
              </div>

              {/* Table Rows */}
              {[
                { name: 'Accommodation', color: 'var(--color-text-primary)', planned: '12,000', actual: '12,000', diff: '+₹0', diffColor: '#4caf50' },
                { name: 'Flights', color: 'var(--color-gold)', planned: '12,400', actual: '12,400', diff: '+₹0', diffColor: '#4caf50' },
                { name: 'Food', color: '#ff9800', planned: '5,000', actual: '4,200', diff: '+₹800', diffColor: '#4caf50' },
                { name: 'Activities', color: '#009688', planned: '4,000', actual: '3,200', diff: '+₹800', diffColor: '#4caf50' },
              ].map((row, i) => (
                <div key={i} className="budget-table-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '20px 0', borderBottom: i === 3 ? 'none' : '1px solid var(--color-border-light)', fontSize: '14px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: row.color }} />
                    {row.name}
                  </div>
                  <div style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>₹{row.planned}</div>
                  <div style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>₹{row.actual}</div>
                  <div style={{ color: row.diffColor, fontWeight: 700 }}>{row.diff}</div>
                </div>
              ))}
            </div>

            {/* Breakdown Chart */}
            <div style={{ background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', padding: '24px' }}>
              <h3 style={{ margin: '0 0 32px 0', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Breakdown</h3>
              
              {/* CSS Donut Chart */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                <div style={{
                  width: '180px', height: '180px', borderRadius: '50%',
                  background: 'conic-gradient(var(--color-ink) 0% 32%, var(--color-gold) 32% 65%, #ff9800 65% 82%, #009688 82% 100%)',
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {/* Inner Circle to make it a donut */}
                  <div style={{ width: '130px', height: '130px', background: 'var(--color-surface)', borderRadius: '50%' }} />
                </div>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'Accommodation', color: 'var(--color-text-primary)', pct: '32%' },
                  { name: 'Flights', color: 'var(--color-gold)', pct: '33%' },
                  { name: 'Food', color: '#ff9800', pct: '17%' },
                  { name: 'Activities', color: '#009688', pct: '18%' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                      {item.name}
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{item.pct}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
