import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StartChatting from '../components/StartChatting';
import PersonalizedRecommendations from '../components/PersonalizedRecommendations';
import OrganizeReceipts from '../components/OrganizeReceipts';
import OrganizeCategories from '../components/OrganizeCategories';
import TrendingDestinations from '../components/TrendingDestinations';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StartChatting />
        <PersonalizedRecommendations />
        <OrganizeReceipts />
        <OrganizeCategories />
        <TrendingDestinations />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
