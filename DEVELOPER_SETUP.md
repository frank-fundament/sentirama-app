# Developer Setup Guide

Complete setup instructions for developing Sentirama locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- **Firebase CLI** - Install globally: `npm install -g firebase-tools`
- **Code Editor** - VS Code recommended with extensions:
  - ESLint
  - Tailwind CSS IntelliSense
  - Prettier

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/frank-fundament/sentirama-app.git
cd sentirama-app
```

### 2. Install Dependencies

Install dependencies for all sub-projects:

```bash
# Frontend
cd frontend
npm install

# Admin
cd ../admin
npm install

# Cloud Functions
cd ../functions
npm install

# Return to root
cd ..
```

### 3. Firebase Setup

#### Login to Firebase

```bash
firebase login
```

#### Link to Existing Project

The project is already configured for `sentirama-381f7`. Verify the configuration:

```bash
firebase projects:list
```

You should see `sentirama-381f7` in the list.

#### Initialize Firebase (if needed)

If starting fresh or the configuration is missing:

```bash
firebase init
```

Select:
- Firestore
- Functions
- Hosting

Follow the prompts and use these settings:
- Firestore rules: `firestore.rules`
- Firestore indexes: `firestore.indexes.json`
- Functions: Node 18, JavaScript/ES6
- Hosting public directory: `frontend/dist` and `admin/dist`
- Single-page app: Yes
- GitHub deployment: No (optional)

### 4. Environment Variables

#### Frontend

Create `frontend/.env` based on `frontend/.env.example`:

```bash
cp frontend/.env.example frontend/.env
```

Edit `frontend/.env` with your Firebase config (already configured for sentirama-381f7):

```env
VITE_FIREBASE_API_KEY=AIzaSyAQ-8VA_EhYdexIo4kckAv_giqfUyTu38o
VITE_FIREBASE_AUTH_DOMAIN=sentirama-381f7.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sentirama-381f7
VITE_FIREBASE_STORAGE_BUCKET=sentirama-381f7.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1021299681168
VITE_FIREBASE_APP_ID=1:1021299681168:web:afcbf086eed6a3fc793515
VITE_FIREBASE_MEASUREMENT_ID=G-5VWQ82HCM8

VITE_APP_NAME=Sentirama
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development
```

#### Admin

Create `admin/.env` based on `admin/.env.example`:

```bash
cp admin/.env.example admin/.env
```

Use the same Firebase config as frontend, plus admin-specific settings.

#### Functions

Create `functions/.env` for local development:

```bash
cp functions/.env.example functions/.env
```

For production, set environment variables using:

```bash
firebase functions:config:set someservice.key="THE API KEY"
```

### 5. Firestore Security Rules

Deploy security rules:

```bash
firebase deploy --only firestore:rules
```

### 6. Firestore Indexes

Deploy indexes:

```bash
firebase deploy --only firestore:indexes
```

Note: Indexes may take a few minutes to build.

## Development Workflow

### Running Locally

#### Option 1: Firebase Emulators (Recommended)

Run everything locally without affecting production:

```bash
# Start all emulators
firebase emulators:start
```

This starts:
- Auth Emulator: `http://localhost:9099`
- Firestore Emulator: `http://localhost:8080`
- Functions Emulator: `http://localhost:5001`
- Hosting Emulator: `http://localhost:5000`
- Emulator UI: `http://localhost:4000`

Then in separate terminals:

```bash
# Frontend
cd frontend
npm run dev
# Access at http://localhost:3000

# Admin
cd admin
npm run dev
# Access at http://localhost:3001
```

#### Option 2: Development Servers Only

If you want to use the production Firebase services:

```bash
# Frontend
cd frontend
npm run dev

# Admin (separate terminal)
cd admin
npm run dev

# Functions (separate terminal)
cd functions
npm run serve
```

### Project Structure & Development

```
frontend/src/
  ├── components/     # Reusable UI components
  │   ├── Button.jsx
  │   ├── Input.jsx
  │   ├── Card.jsx
  │   └── index.js   # Barrel export
  │
  ├── pages/         # Route pages
  │   ├── Welcome.jsx
  │   ├── MoodSelector.jsx
  │   └── ...
  │
  ├── context/       # React Context providers
  │   ├── AuthContext.jsx
  │   ├── LocationContext.jsx
  │   └── EmotionContext.jsx
  │
  ├── hooks/         # Custom React hooks
  │   ├── useAuth.js
  │   └── useEmotions.js
  │
  ├── services/      # API services
  │   ├── firebaseService.js
  │   └── emotionService.js
  │
  ├── utils/         # Utilities
  │   ├── constants.js
  │   ├── geohashUtils.js
  │   └── formValidation.js
  │
  └── data/          # Static data
      └── emotions.js
```

### Component Development Pattern

1. **Create Component**:
```jsx
// frontend/src/components/Button.jsx
import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all';
  const variantClasses = {
    primary: 'bg-indigo-400 hover:bg-indigo-500 text-white',
    secondary: 'bg-slate-300 hover:bg-slate-400 text-slate-700'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
```

2. **Add to Barrel Export**:
```jsx
// frontend/src/components/index.js
export { default as Button } from './Button';
export { default as Input } from './Input';
// ... other components
```

3. **Use in Pages**:
```jsx
// frontend/src/pages/Welcome.jsx
import { Button } from '@components';

const Welcome = () => {
  return (
    <div>
      <Button variant="primary" onClick={() => navigate('/mood')}>
        Get Started
      </Button>
    </div>
  );
};
```

### Working with Firebase

#### Authentication

```javascript
import { auth } from '@services/firebaseService';

// Sign up
await auth.createUserWithEmailAndPassword(email, password);

// Sign in
await auth.signInWithEmailAndPassword(email, password);

// Sign out
await auth.signOut();
```

#### Firestore

```javascript
import { db } from '@services/firebaseService';

// Add document
await db.collection('users').doc(userId).collection('emotions').add({
  emotion: 'peaceful',
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
});

// Query documents
const snapshot = await db.collection('users')
  .doc(userId)
  .collection('emotions')
  .orderBy('timestamp', 'desc')
  .limit(20)
  .get();

const emotions = snapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
}));
```

#### Cloud Functions

```javascript
// functions/index.js
import { onDocumentCreated } from 'firebase-functions/v2/firestore';

export const onEmotionCreate = onDocumentCreated(
  'users/{userId}/emotions/{emotionId}',
  async (event) => {
    const emotion = event.data.data();
    // Process emotion data
    console.log('New emotion recorded:', emotion);
  }
);
```

## Testing

### Unit Tests

```bash
# Frontend
cd frontend
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

### Manual Testing Checklist

- [ ] User signup and login
- [ ] Emotion selection flow
- [ ] Location consent handling
- [ ] Emotion recording
- [ ] History view with pagination
- [ ] Charts and visualizations
- [ ] Pattern analysis
- [ ] Emotion dictionary
- [ ] Settings page
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark mode (if implemented)

### Testing with Emulators

1. Start emulators: `firebase emulators:start`
2. Access Emulator UI: `http://localhost:4000`
3. View Firestore data, Auth users, Function logs
4. Import/export test data
5. Reset emulator data: `firebase emulators:start --import=./test-data --export-on-exit`

## Building for Production

### Frontend

```bash
cd frontend
npm run build

# Preview production build
npm run preview
```

Output: `frontend/dist/`

### Admin

```bash
cd admin
npm run build
```

Output: `admin/dist/`

### Functions

Functions are deployed directly from source:

```bash
firebase deploy --only functions
```

## Deployment

### Deploy Everything

```bash
# From project root
firebase deploy
```

### Deploy Specific Targets

```bash
# Hosting only
firebase deploy --only hosting

# Specific hosting target
firebase deploy --only hosting:frontend
firebase deploy --only hosting:admin

# Functions only
firebase deploy --only functions

# Specific function
firebase deploy --only functions:onEmotionCreate

# Firestore rules
firebase deploy --only firestore:rules

# Firestore indexes
firebase deploy --only firestore:indexes
```

### Pre-deployment Checklist

- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Firebase project selected
- [ ] Security rules reviewed
- [ ] Functions tested locally
- [ ] Build successful
- [ ] No console errors
- [ ] Performance optimized
- [ ] Analytics configured (optional)

## Troubleshooting

### Common Issues

**Issue**: `firebase: command not found`
```bash
npm install -g firebase-tools
```

**Issue**: Emulator port conflicts
```bash
# Edit firebase.json to change ports
# Or kill processes on conflicting ports
```

**Issue**: Firestore permission denied
- Check security rules
- Verify user is authenticated
- Check user ID matches document path

**Issue**: Functions not deploying
```bash
# Check Node version
node --version  # Should be 18+

# Check for syntax errors
cd functions
npm run lint
```

**Issue**: Environment variables not loading
- Ensure `.env` file exists
- Check variable names start with `VITE_`
- Restart dev server after changes

**Issue**: Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Code Style & Best Practices

### JavaScript/React

- Use functional components with hooks
- Use arrow functions
- Destructure props
- Use meaningful variable names
- Add JSDoc comments for complex functions
- Keep components small and focused

### Tailwind CSS

- Use utility classes
- Avoid inline styles
- Use theme colors from config
- Mobile-first responsive design
- Group related classes

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/emotion-selector

# Make changes and commit
git add .
git commit -m "Add emotion selector component"

# Push to remote
git push origin feature/emotion-selector

# Create pull request on GitHub
```

### Commit Messages

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, missing semi-colons, etc.
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

Example:
```
feat: add emotion dictionary page
fix: resolve chart rendering issue
docs: update README with deployment steps
```

## Resources

- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

## Getting Help

1. Check this documentation
2. Search existing GitHub issues
3. Create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details
   - Screenshots if applicable

---

Happy coding! 🚀
