// src/services/destinationService.js
/** @typedef {import('../types').Destination} Destination */

export const destinationService = {
  /**
   * @returns {Promise<Destination[]>}
   */
  async getDestinations() {
    try {
      // Simulate real API fetch using the browser's fetch API
      // We added a small delay to simulate network latency
      const response = await fetch('/api/destinations.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data);
        }, 400); // simulate network latency
      });
      
    } catch (error) {
      console.error("Failed to fetch destinations:", error);
      return [];
    }
  }
};
