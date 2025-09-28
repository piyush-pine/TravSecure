# SIH PROJECT PROTOTYPE (FRONTEND)

## Project info

**URL**: https://lovable.dev/projects/8b7eb74d-1622-49b9-9b50-d3dfcf28c08b


# TravSecure Dashboard

TravSecure Dashboard is a sophisticated, real-time monitoring and control center designed to improve tourist safety management through live alerts, heatmaps, risk zone identification, and emergency response features.

## Features

- Real-time status monitoring: Active tourists, alerts, risk zones, and response times
- Interactive tourist distribution heatmap displayed using Leaflet and heatmap layers
- Sidebar navigation with key modules like AI Behavior Analytics, Alert Center, Tourists Management
- Quick action controls: emergency broadcasts, area alerts, e-FIR generation, and emergency dispatch
- Dark-themed, responsive UI built with React and Material UI

## Technologies Used

- React.js (with hooks and functional components)
- Material UI for UI components and layout
- React-Leaflet and Leaflet-Heatmap for visualizing location-based heatmaps
- JavaScript ES6+ syntax for modular and clean coding

## Getting Started

### Prerequisites

- Node.js (>=14.x recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/piyush-pine/idea-link-dream.git
   cd idea-link-dream
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Visit `http://localhost:3000` in your browser to see the dashboard.

## Project Structure

- `src/components` - Reusable React components like Sidebar, Status Cards, Quick Actions, Heatmap
- `src/data` - Contains mock data for tourist locations and heatmap points
- `src/App.js` - Main app component assembling dashboard layout
- `src/App.css` - Styling and theming for the app interface

## Customization

- Modify `mockLocations.js` to use real or dynamic tourist location data
- Integrate backend APIs for fetching live alerts and risk zone data
- Extend sidebar navigation and add authentication for secured access
- Implement notifications and alerts using sockets or polling

## Contribution

Contributions are welcome! Please open issues or create pull requests for enhancements or bug fixes.

## License

MIT License © 2025 TravSecure Team

---

Stay safe and secure every journey with TravSecure.

```
