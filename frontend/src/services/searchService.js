// src/services/searchService.js

export const searchService = {
  /**
   * @param {string} query 
   * @returns {Promise<any[]>}
   */
  async search(query) {
    if (!query) return [];
    
    return new Promise(resolve => {
      setTimeout(() => {
        // Just mock some semantic results
        resolve([
          { id: 's1', type: 'destination', title: 'Paris', subtitle: 'France' },
          { id: 's2', type: 'trip', title: 'My Goa trip', subtitle: 'Upcoming' },
          { id: 's3', type: 'place', title: 'Restaurants in Tokyo', subtitle: 'Search query' }
        ].filter(res => res.title.toLowerCase().includes(query.toLowerCase())));
      }, 300);
    });
  }
};
