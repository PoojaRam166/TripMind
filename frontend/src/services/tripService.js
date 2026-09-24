// src/services/tripService.js
/** @typedef {import('../types').Trip} Trip */

const MOCK_TRIPS = [
  {
    id: 'trip-1',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop',
    title: 'Goa, India',
    location: 'India',
    dates: 'Sep 25 - Sep 29',
    travelers: 2,
    price: '₹30,000',
    progress: 72,
    status: 'Planning',
    isDraft: false
  },
  {
    id: 'trip-2',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop',
    title: 'Paris',
    location: 'France',
    dates: 'Oct 10 - Oct 15',
    travelers: 2,
    price: '₹1,50,000',
    progress: 45,
    status: 'Planning',
    isDraft: false
  },
  {
    id: 'draft-1',
    image: '',
    title: 'Japan Adventure',
    location: 'Japan',
    dates: 'TBD',
    travelers: 1,
    price: 'TBD',
    progress: 65,
    status: 'Planning',
    isDraft: true,
    nextStep: 'Add your budget and interests to continue'
  },
  {
    id: 'draft-2',
    image: '',
    title: 'Kerala Retreat',
    location: 'India',
    dates: 'Nov 3 - 7',
    travelers: 4,
    price: 'TBD',
    progress: 40,
    status: 'Planning',
    isDraft: true,
    nextStep: 'Review itinerary Day 2'
  }
];

export const tripService = {
  /**
   * @returns {Promise<Trip[]>}
   */
  async getUpcomingTrips() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(MOCK_TRIPS.filter(t => !t.isDraft));
      }, 300);
    });
  },

  /**
   * @returns {Promise<Trip[]>}
   */
  async getDraftTrips() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(MOCK_TRIPS.filter(t => t.isDraft));
      }, 300);
    });
  }
};
