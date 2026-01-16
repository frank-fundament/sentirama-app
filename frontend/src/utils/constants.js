/**
 * Application Constants
 */

// App metadata
export const APP_NAME = 'Sentirama';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Track, understand, and learn from your emotions';

// Emotion categories
export const EMOTION_CATEGORIES = {
  POSITIVE: 'positive',
  NEUTRAL: 'neutral',
  CHALLENGING: 'challenging'
};

// Location precision levels
export const LOCATION_PRECISION = {
  DISABLED: 'disabled',
  CITY: 'city',           // ~40km precision (geohash length 4)
  NEIGHBOURHOOD: 'neighbourhood'  // ~5km precision (geohash length 5)
};

// Geohash precision mapping
export const GEOHASH_PRECISION = {
  [LOCATION_PRECISION.CITY]: 4,
  [LOCATION_PRECISION.NEIGHBOURHOOD]: 5
};

// Pagination
export const EMOTIONS_PER_PAGE = 20;
export const HISTORY_DISPLAY_LIMIT = 10;

// Form validation
export const MAX_NOTE_LENGTH = 500;
export const MAX_TAG_SELECTIONS = 5;
export const MIN_PASSWORD_LENGTH = 6;

// Time formats
export const DATE_FORMAT = 'MMM d, yyyy';
export const TIME_FORMAT = 'h:mm a';
export const DATETIME_FORMAT = 'MMM d, yyyy h:mm a';

// Chart colors
export const CHART_COLORS = {
  mad: '#C85A54',
  peaceful: '#7DB57D',
  sad: '#4A7C8C',
  neutral: '#94a3b8',
  positive: '#94a3b8',
  challenging: '#fbbf24'
};

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'sentirama_auth_token',
  USER_PREFERENCES: 'sentirama_user_prefs',
  LOCATION_CONSENT: 'sentirama_location_consent'
};

// Error messages
export const ERROR_MESSAGES = {
  AUTH_FAILED: 'Authentication failed. Please try again.',
  LOCATION_DENIED: 'Location access denied. You can enable it in settings.',
  SAVE_FAILED: 'Failed to save emotion entry. Please try again.',
  LOAD_FAILED: 'Failed to load data. Please refresh the page.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  WEAK_PASSWORD: 'Password must be at least 6 characters.',
  GENERIC_ERROR: 'Something went wrong. Please try again.'
};

// Success messages
export const SUCCESS_MESSAGES = {
  EMOTION_SAVED: 'Emotion recorded successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  SETTINGS_SAVED: 'Settings saved!',
  ACCOUNT_CREATED: 'Account created successfully!'
};

// Routes
export const ROUTES = {
  HOME: '/',
  WELCOME: '/welcome',
  LOGIN: '/login',
  SIGNUP: '/signup',
  MOOD_SELECTOR: '/mood',
  REFINED_SELECTOR: '/refined',
  LOCATION_CONSENT: '/location-consent',
  EMOTION_RECORD: '/record',
  HISTORY: '/history',
  SETTINGS: '/settings',
  ADMIN: '/admin'
};

// Analytics event names
export const ANALYTICS_EVENTS = {
  EMOTION_RECORDED: 'emotion_recorded',
  LOCATION_CONSENT_GIVEN: 'location_consent_given',
  LOCATION_CONSENT_DENIED: 'location_consent_denied',
  USER_SIGNUP: 'user_signup',
  USER_LOGIN: 'user_login'
};

// Map configuration
export const MAP_CONFIG = {
  DEFAULT_CENTER: [40.4168, -3.7038], // Madrid, Spain
  DEFAULT_ZOOM: 6,
  MIN_ZOOM: 4,
  MAX_ZOOM: 18,
  HEAT_RADIUS: 25,
  HEAT_BLUR: 15
};

export default {
  APP_NAME,
  APP_VERSION,
  EMOTION_CATEGORIES,
  LOCATION_PRECISION,
  ROUTES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES
};
