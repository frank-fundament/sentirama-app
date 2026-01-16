# Sentirama

A thoughtful emotion tracking application that helps you track, understand, and learn from your emotions over time.

## Overview

Sentirama is a comprehensive emotion tracking platform that combines user-friendly emotion logging with powerful analytics and visualization. The app allows users to record their emotional states with contextual information and optional location data, while providing insights through data visualization and pattern analysis.

## Features

### User Application (Frontend)
- **Emotion Selection**: Multi-level emotion selection (primary → refined emotions)
- **Contextual Tracking**: Record activities, locations, people, and notes
- **Location Services**: Optional geohash-based location tracking with privacy controls
- **Data Visualization**: Charts showing emotion patterns over time
- **Pattern Analysis**: Discover correlations between emotions and situations
- **Emotion Dictionary**: Learn about emotions with definitions, effects, and coping strategies
- **Anonymous & Authenticated Modes**: Use without account or sign up for cloud sync

### Admin Dashboard
- **Emotion Map**: Interactive heat map showing aggregated emotional data by region
- **Regional Analysis**: Detailed breakdowns by geographical area
- **Time Series Analysis**: Track emotional trends over time
- **Data Export**: Export data in CSV and PDF formats
- **Real-time Updates**: Live data from Firestore

### Cloud Functions
- **Automatic Aggregation**: Real-time emotion data aggregation by location
- **Daily Summaries**: Scheduled reports and analytics
- **Data Cleanup**: Automated retention policy enforcement

## Technology Stack

### Frontend
- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Recharts**: Data visualization
- **Lucide React**: Icon library

### Backend & Infrastructure
- **Firebase Authentication**: User management
- **Cloud Firestore**: NoSQL database
- **Cloud Functions**: Serverless backend logic
- **Firebase Hosting**: Static file hosting

### Development Tools
- **ESLint**: Code linting
- **Vitest**: Unit testing
- **Firebase Emulators**: Local development environment

## Project Structure

```
sentirama-app/
├── index.html          # Legacy single-file app (for reference)
├── frontend/           # User-facing application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Route pages
│   │   ├── context/    # React context providers
│   │   ├── hooks/      # Custom React hooks
│   │   ├── services/   # API and Firebase services
│   │   ├── utils/      # Utility functions
│   │   └── data/       # Static data (emotions, etc.)
│   └── public/         # Static assets
│
├── admin/              # Admin dashboard
│   └── src/            # Similar structure to frontend
│
├── functions/          # Cloud Functions
│   ├── index.js        # Function exports
│   ├── onEmotionCreate.js
│   ├── generateDailySummary.js
│   └── deleteOldRecords.js
│
├── firebase.config.js  # Firebase configuration
├── firestore.rules     # Firestore security rules
├── firestore.indexes.json
├── firebase.json       # Firebase project config
└── .firebaserc         # Firebase project aliases
```

## Getting Started

See [DEVELOPER_SETUP.md](./DEVELOPER_SETUP.md) for detailed setup instructions.

### Quick Start

1. **Clone and install dependencies:**
```bash
# Install frontend dependencies
cd frontend && npm install

# Install admin dependencies
cd ../admin && npm install

# Install functions dependencies
cd ../functions && npm install
```

2. **Set up Firebase:**
```bash
# Login to Firebase
firebase login

# Start emulators for local development
firebase emulators:start
```

3. **Start development servers:**
```bash
# Frontend (port 3000)
cd frontend && npm run dev

# Admin (port 3001) - in a separate terminal
cd admin && npm run dev
```

## Environment Variables

Create `.env` files in `frontend/` and `admin/` directories based on `.env.example`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Current Implementation

The current app (in `index.html`) is a single-file React application with:
- Firebase Authentication and Firestore integration
- 24 emotions with comprehensive dictionary
- Data visualization using Chart.js
- Pattern analysis by location, activity, and social context
- Calm, relaxing design without emojis
- Cloud storage with user authentication

The new modular structure (in `frontend/`, `admin/`, `functions/`) provides:
- Better code organization
- Scalability and maintainability
- Advanced features like geolocation and admin analytics
- Optimized builds and performance

## Database Structure

### Firestore Collections

```
users/{userId}
  - name: string
  - consentAccepted: boolean
  - updatedAt: timestamp

  emotions/{emotionId}
    - emotion: string
    - category: string
    - context: object (activity, location, people, notes)
    - timestamp: timestamp
    - hour: number
    - dayOfWeek: number
    - geohash?: string (if location enabled)

locations/{areaId}
  - areaName: string
  - geohash: string
  - totalRecords: number
  - emotionBreakdown: object
  - heatmapValue: number
  - updatedAt: timestamp

analytics/{reportId}
  - date: string
  - summary: object
  - emotionDistribution: object
  - regionalBreakdown: array
```

## Deployment

### Frontend & Admin
```bash
# Build production bundles
cd frontend && npm run build
cd admin && npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

### Cloud Functions
```bash
# Deploy all functions
firebase deploy --only functions

# Deploy specific function
firebase deploy --only functions:onEmotionCreate
```

## Testing

```bash
# Frontend tests
cd frontend && npm test

# Run tests with coverage
npm test -- --coverage
```

## Security

- Firestore security rules enforce user data isolation
- Location data stored as geohashes (not exact coordinates)
- Admin access requires special permissions
- All connections use HTTPS
- Environment variables for sensitive config

## Privacy

- Location tracking is **opt-in** only
- Location data uses geohashing for privacy (5km precision minimum)
- Users can delete their data at any time
- Anonymous usage option available
- Aggregated data cannot identify individuals

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please create an issue in the GitHub repository.

## Acknowledgments

- Built with Firebase and React
- Emotion data based on psychological research
- Geohashing implementation using geohash-js
- A project by [Fundament](https://www.fundament.es)

---

**Version**: 1.0.0
**Project**: Sentirama
**Firebase Project ID**: sentirama-381f7