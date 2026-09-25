import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import PlanTripPage from './pages/PlanTripPage';
import HelpPage from './pages/HelpPage';
import TripDetailPage from './pages/TripDetailPage';
import MyTripsPage from './pages/MyTripsPage';
import SavedPlacesPage from './pages/SavedPlacesPage';
import AssistantPage from './pages/AssistantPage';
import MemoriesPage from './pages/MemoriesPage';
import BudgetTrackerPage from './pages/BudgetTrackerPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import GlobalAssistantWidget from './components/GlobalAssistantWidget';
import { ToastProvider } from './components/ToastContext';

function GlobalWidgetWrapper() {
  const location = useLocation();
  const publicRoutes = ['/', '/login', '/register', '/forgot-password', '/reset-password'];
  if (publicRoutes.includes(location.pathname)) return null;
  return <GlobalAssistantWidget />;
}

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/plan" element={<PlanTripPage />} />
            <Route path="/trips" element={<MyTripsPage />} />
            <Route path="/saved-places" element={<SavedPlacesPage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/budget" element={<BudgetTrackerPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/assistant" element={<AssistantPage />} />
            <Route path="/trip/:id" element={<TripDetailPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Routes>
          <GlobalWidgetWrapper />
      </BrowserRouter>
    </ToastProvider>
  );
}
