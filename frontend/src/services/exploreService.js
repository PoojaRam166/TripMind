// Mock data for destinations
const mockDestinations = [
  {
    id: 1,
    title: 'Kyoto Temples & Gardens',
    location: 'Kyoto, Japan',
    image: 'https://picsum.photos/seed/kyoto/800/600',
    rating: 4.8,
    reviews: 1240,
    priceRange: '₹80,000 - ₹1,20,000',
    budgetCategory: 'Premium',
    categories: ['Cultural', 'Spiritual', 'Photography'],
    bestTime: ['Spring', 'Autumn', 'April', 'November'],
    duration: '5–7 days',
    activities: ['Temples', 'Photography', 'Food'],
    weather: 'Pleasant',
    region: 'Asia',
    isTrending: true,
    description: 'Experience the serene beauty of ancient temples and traditional gardens.',
    saved: false,
    reason: 'Matches your interest in culture and photography'
  },
  {
    id: 2,
    title: 'Bali Beach Retreat',
    location: 'Bali, Indonesia',
    image: 'https://picsum.photos/seed/bali/800/600',
    rating: 4.6,
    reviews: 890,
    priceRange: '₹40,000 - ₹70,000',
    budgetCategory: 'Moderate',
    categories: ['Relaxation', 'Couple', 'Beaches'],
    bestTime: ['Summer', 'July', 'August'],
    duration: '1–2 weeks',
    activities: ['Beaches', 'Water Sports', 'Nightlife'],
    weather: 'Warm',
    region: 'Asia',
    isTrending: true,
    description: 'Relax on pristine beaches and explore vibrant local culture.',
    saved: false,
    reason: 'Great for a relaxing getaway'
  },
  {
    id: 3,
    title: 'Swiss Alps Adventure',
    location: 'Zermatt, Switzerland',
    image: 'https://picsum.photos/seed/alps/800/600',
    rating: 4.9,
    reviews: 512,
    priceRange: '₹1,50,000+',
    budgetCategory: 'Luxury',
    categories: ['Adventure', 'Nature', 'Luxury'],
    bestTime: ['Winter', 'December', 'January'],
    duration: '5–7 days',
    activities: ['Hiking', 'Snow Sports', 'Photography'],
    weather: 'Snow',
    region: 'Europe',
    isTrending: false,
    description: 'World-class skiing and breathtaking views of the Matterhorn.',
    saved: false,
    reason: 'Recommended for nature lovers'
  },
  {
    id: 4,
    title: 'Goa Coastal Getaway',
    location: 'Goa, India',
    image: 'https://picsum.photos/seed/goa/800/600',
    rating: 4.5,
    reviews: 2100,
    priceRange: '₹15,000 - ₹35,000',
    budgetCategory: 'Economy',
    categories: ['Friends', 'Beaches', 'Food & Culinary'],
    bestTime: ['Winter', 'November', 'December'],
    duration: '3–5 days',
    activities: ['Beaches', 'Nightlife', 'Food'],
    weather: 'Sunny',
    region: 'India',
    isTrending: true,
    description: 'Vibrant nightlife, historic churches, and beautiful sandy beaches.',
    saved: true,
    reason: 'Perfect for friends and budget trips'
  },
  {
    id: 5,
    title: 'Amalfi Coast Drive',
    location: 'Amalfi, Italy',
    image: 'https://picsum.photos/seed/amalfi/800/600',
    rating: 4.7,
    reviews: 740,
    priceRange: '₹1,00,000 - ₹1,80,000',
    budgetCategory: 'Premium',
    categories: ['Romantic', 'Couple', 'Luxury'],
    bestTime: ['Summer', 'June', 'September'],
    duration: '5–7 days',
    activities: ['Food', 'Photography', 'Historical Places'],
    weather: 'Sunny',
    region: 'Europe',
    isTrending: true,
    description: 'Scenic coastal drives and incredible Italian cuisine.',
    saved: false,
    reason: 'Top destination for couples'
  },
  {
    id: 6,
    title: 'Spiti Valley Expedition',
    location: 'Himachal Pradesh, India',
    image: 'https://picsum.photos/seed/spiti/800/600',
    rating: 4.8,
    reviews: 320,
    priceRange: '₹20,000 - ₹45,000',
    budgetCategory: 'Moderate',
    categories: ['Adventure', 'Backpacking', 'Photography'],
    bestTime: ['Summer', 'July', 'August'],
    duration: '1–2 weeks',
    activities: ['Trekking', 'Camping', 'Photography'],
    weather: 'Cool',
    region: 'India',
    isTrending: false,
    description: 'High altitude desert with ancient monasteries and stark beauty.',
    saved: false,
    reason: 'Ideal for adventure seekers'
  },
  {
    id: 7,
    title: 'Santorini Sunset',
    location: 'Santorini, Greece',
    image: 'https://picsum.photos/seed/santorini/800/600',
    rating: 4.9,
    reviews: 1450,
    priceRange: '₹90,000 - ₹1,50,000',
    budgetCategory: 'Premium',
    categories: ['Romantic', 'Relaxation', 'Couple'],
    bestTime: ['Summer', 'May', 'September'],
    duration: '5–7 days',
    activities: ['Photography', 'Food', 'Beaches'],
    weather: 'Sunny',
    region: 'Europe',
    isTrending: true,
    description: 'Iconic blue domes, white-washed houses, and incredible sunsets.',
    saved: true,
    reason: 'Highly rated by couples'
  },
  {
    id: 8,
    title: 'Dubai City Break',
    location: 'Dubai, UAE',
    image: 'https://picsum.photos/seed/dubai/800/600',
    rating: 4.6,
    reviews: 3400,
    priceRange: '₹50,000 - ₹90,000',
    budgetCategory: 'Premium',
    categories: ['Luxury', 'Shopping', 'Family'],
    bestTime: ['Winter', 'December', 'January'],
    duration: '3–5 days',
    activities: ['Shopping', 'Nightlife', 'Desert Safari'],
    weather: 'Warm',
    region: 'Middle East',
    isTrending: true,
    description: 'Futuristic architecture, luxury shopping, and desert adventures.',
    saved: false,
    reason: 'Great for a quick luxurious getaway'
  }
];

export const exploreService = {
  // Get all destinations
  getAllDestinations: async () => {
    return new Promise(resolve => setTimeout(() => resolve([...mockDestinations]), 300));
  },

  // Get trending destinations
  getTrendingDestinations: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockDestinations.filter(d => d.isTrending));
      }, 300);
    });
  },

  // Get nearby places (Mocking based on some logic)
  getNearbyPlaces: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockDestinations.filter(d => d.region === 'India'));
      }, 300);
    });
  },

  // Get AI recommendations
  getRecommendations: async (query) => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Return random 3 destinations to simulate AI response
        const shuffled = [...mockDestinations].sort(() => 0.5 - Math.random());
        resolve(shuffled.slice(0, 3));
      }, 1000); // Artificial delay to simulate AI thinking
    });
  },

  // Advanced Filtering
  filterDestinations: async (filters, query, sort) => {
    return new Promise(resolve => {
      setTimeout(() => {
        let results = [...mockDestinations];

        // 1. Search Query
        if (query) {
          const q = query.toLowerCase();
          results = results.filter(d => 
            d.title.toLowerCase().includes(q) || 
            d.location.toLowerCase().includes(q) ||
            d.description.toLowerCase().includes(q) ||
            d.categories.some(c => c.toLowerCase().includes(q))
          );
        }

        // 2. Destinations / Regions
        if (filters.regions && filters.regions.length > 0) {
          results = results.filter(d => filters.regions.includes(d.region));
        }

        // 3. Travel Style
        if (filters.travelStyles && filters.travelStyles.length > 0) {
          results = results.filter(d => 
            d.categories.some(c => filters.travelStyles.includes(c))
          );
        }

        // 4. Budget
        if (filters.budget && filters.budget.length > 0) {
          results = results.filter(d => filters.budget.includes(d.budgetCategory));
        }

        // 5. Duration
        if (filters.duration && filters.duration.length > 0) {
          results = results.filter(d => filters.duration.includes(d.duration));
        }
        
        // 6. Activities
        if (filters.activities && filters.activities.length > 0) {
          results = results.filter(d => 
            d.activities.some(a => filters.activities.includes(a))
          );
        }
        
        // 7. Weather
        if (filters.weather && filters.weather.length > 0) {
          results = results.filter(d => filters.weather.includes(d.weather));
        }
        
        // 8. Rating
        if (filters.rating) {
          const minRating = parseFloat(filters.rating.replace('+', ''));
          results = results.filter(d => d.rating >= minRating);
        }

        // Sorting
        if (sort === 'Popular') {
          results.sort((a, b) => b.reviews - a.reviews);
        } else if (sort === 'Rating') {
          results.sort((a, b) => b.rating - a.rating);
        }

        resolve(results);
      }, 400);
    });
  }
};
