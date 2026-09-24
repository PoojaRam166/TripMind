// src/services/agentService.js
/** @typedef {import('../types').PlanningRequest} PlanningRequest */
/** @typedef {import('../types').AgentStatus} AgentStatus */

export const AGENT_SEQUENCE = [
  { id: 'planner', label: 'Planner Agent', desc: 'Understanding your trip requirements', successMsg: 'Trip requirements understood' },
  { id: 'research', label: 'Research Agent', desc: 'Researching destinations and places', successMsg: 'Found 18 relevant places' },
  { id: 'activity', label: 'Activity Agent', desc: 'Finding activities based on your interests', successMsg: 'Activities curated' },
  { id: 'weather', label: 'Weather Agent', desc: 'Checking the forecast...', successMsg: 'Forecast optimal' },
  { id: 'route', label: 'Route Agent', desc: 'Optimizing your route', successMsg: 'Route optimized' },
  { id: 'budget', label: 'Budget Agent', desc: 'Calculating your estimated cost', successMsg: 'Budget calculated' },
  { id: 'critic', label: 'Critic Agent', desc: 'Reviewing the itinerary', successMsg: 'Itinerary approved' }
];

export const agentService = {
  /**
   * Simulates streaming agent events. 
   * In a real app, this would use EventSource / SSE to listen to a FastAPI backend.
   * 
   * @param {PlanningRequest} request 
   * @param {function(AgentStatus): void} onEvent
   * @param {function(): void} onComplete
   */
  async startPlanning(request, onEvent, onComplete) {
    let delay = 0;
    
    // Simulate streaming events with delays
    AGENT_SEQUENCE.forEach((agent, index) => {
      // Set to working
      setTimeout(() => {
        onEvent({ agent: agent.id, status: 'working', message: agent.desc });
      }, delay);
      
      // Keep it working for 1.5 seconds
      delay += 1500;
      
      // Set to completed
      setTimeout(() => {
        onEvent({ agent: agent.id, status: 'completed', message: agent.successMsg });
      }, delay);
    });

    // Fire complete callback after all are done
    setTimeout(() => {
      if (onComplete) onComplete();
    }, delay + 500);
  }
};
