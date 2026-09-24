// Static data for the landing page
import { Sparkles, CalendarDays, IndianRupee, Hotel, Route, Camera, Plane, Utensils, MapPin, Bus } from 'lucide-react';

export const organizeCategories = [
  {
    id: 1,
    icon: <Hotel size={20} />,
    title: 'Hotels',
    desc: 'Stay at the best hotels around the world for the best prices.',
  },
  {
    id: 2,
    icon: <Bus size={20} />,
    title: 'Car Rental',
    desc: 'Unlock deals on any type of wheels and hit the road.',
  },
  {
    id: 3,
    icon: <Plane size={20} />,
    title: 'Flights',
    desc: 'Get real-time airfares for anywhere you want to jet off to.',
  },
  {
    id: 4,
    icon: <Utensils size={20} />,
    title: 'Restaurants',
    desc: 'Snag a coveted table at the hottest restaurants.',
  },
  {
    id: 5,
    icon: <Sparkles size={20} />,
    title: 'Experiences',
    desc: 'Make reservations for your favorite activities, then make memories.',
  },
  {
    id: 6,
    icon: <MapPin size={20} />,
    title: 'Tours',
    desc: 'Get an insider’s perspective on any location or attraction.',
  },
];

export const destinations = [
  {
    id: 1,
    name: 'Goa',
    country: 'India',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Bali',
    country: 'Indonesia',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Paris',
    country: 'France',
    badge: 'Romantic',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Tokyo',
    country: 'Japan',
    badge: 'Adventure',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Manali',
    country: 'India',
    badge: 'Nature',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Maldives',
    country: 'Maldives',
    badge: 'Luxury',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&auto=format&fit=crop&q=80',
  },
];

export const features = [
  {
    id: 1,
    icon: <Sparkles size={24} />,
    title: 'AI Trip Planning',
    desc: 'Describe your dream trip and TripMind builds a complete plan.',
    color: '#0A0A0A',   // Ink black
  },
  {
    id: 2,
    icon: <CalendarDays size={24} />,
    title: 'Smart Itineraries',
    desc: 'Day-by-day plans with activities, timings, and route optimization.',
    color: '#6B7280',   // Slate
  },
  {
    id: 3,
    icon: <IndianRupee size={24} />,
    title: 'Budget Tracking',
    desc: 'Real-time budget breakdowns so you never overspend.',
    color: '#B8935A',   // Gold
  },
  {
    id: 4,
    icon: <Hotel size={24} />,
    title: 'Hotel Discovery',
    desc: 'Compare stays, read reviews, and book accommodations effortlessly.',
    color: '#8B6F47',   // Warm brown
  },
  {
    id: 5,
    icon: <Route size={24} />,
    title: 'Route Optimization',
    desc: 'Smart routing that saves time and reduces unnecessary travel.',
    color: '#4A5568',   // Cool slate
  },
  {
    id: 6,
    icon: <Camera size={24} />,
    title: 'Travel Memory',
    desc: 'Save your favorite places and build your personal travel history.',
    color: '#9A7840',   // Dark gold
  },
];

export const activityChips = [
  { emoji: '🧖', label: 'Spa / Wellness', top: '6%', left: '30%' },
  { emoji: '🎭', label: 'Theater', top: '3%', right: '8%' },
  { emoji: '🏖', label: 'Beach', top: '30%', right: '20%' },
  { emoji: '🦜', label: 'Wildlife', top: '22%', right: '2%' },
  { emoji: '🏔', label: 'Resorts', top: '50%', left: '5%' },
  { emoji: '🍽', label: 'Fine Dining', top: '45%', right: '5%' },
  { emoji: '🏛', label: 'Historical Tours', top: '70%', left: '20%' },
  { emoji: '🤿', label: 'Water Sports', top: '72%', right: '12%' },
  { emoji: '🚴', label: 'Cycling', bottom: '10%', left: '38%' },
];
