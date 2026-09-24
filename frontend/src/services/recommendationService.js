// src/services/recommendationService.js

export const recommendationService = {
  /**
   * @returns {Promise<any[]>}
   */
  async getRecommendations() {
    try {
      // Simulate real API fetch by pulling from our robust destinations endpoint
      const response = await fetch('/api/destinations.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      // Shuffle and pick 3 to make it fully dynamic every time
      const shuffled = data.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      
      // Assign dynamic, AI-like personalized reasons based on their actual categories
      return selected.map(dest => {
        let reason = 'Handpicked for your next trip';
        if (dest.categories.includes('Adventure')) reason = 'Because you crave adventure';
        else if (dest.categories.includes('Beach')) reason = 'Time for a tropical getaway';
        else if (dest.categories.includes('Food & Culture')) reason = 'For the culture enthusiast';
        else if (dest.categories.includes('Trending')) reason = 'Trending right now';
        
        return {
          id: `rec-${dest.id}`,
          originalId: dest.id,
          image: dest.image,
          title: dest.title,
          location: dest.location,
          reason: reason,
          tags: dest.categories.slice(0, 2),
          saved: dest.saved || false
        };
      });
    } catch (error) {
      console.error("Failed to fetch recommendations:", error);
      return [];
    }
  }
};
