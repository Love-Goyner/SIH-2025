# Train Traffic Control — UI Demo

This is a frontend-only demo (React + Vite + Tailwind) for a Train Traffic Control Decision-Support System UI.
It contains mock data and simulated real-time movement for showcasing visualizations, decision panel, incident reporting,
and audit trail features.

## What is included
- React app scaffold (Vite)
- Tailwind CSS
- Pages: Login, Dashboard
- Components: MapView (SVG placeholder), TrainList, DecisionPanel, KPIs, IncidentPanel, AuditLogs, Settings
- Mock data under `src/data/mockTrains.js`
- Simple simulated movement using `setInterval` (client-side only)

## How to run (locally)
1. Install Node.js (v18+ recommended)
2. In project root:
   ```bash
   npm install
   npm run dev
   ```
3. Open the displayed dev URL (usually http://localhost:5173)

## Notes for production integration
- Replace `MapView` with a real map (Mapbox GL or Leaflet) and provide real train positions via websocket/API.
- Connect the decision panel to your optimization backend (POST suggestions / get recommended actions).
- Implement authentication and role-based access control.
- Add telemetry/logging, audit storage, and secure API integration with signaling/TMS.
- Consider accessibility (WCAG), keyboard navigation, and operator ergonomics for shift work (dark mode, large fonts).

-- Demo created by ChatGPT (GPT-5 Thinking mini)
