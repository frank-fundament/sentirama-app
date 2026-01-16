/**
 * Application Constants
 *
 * Central location for all application constants, configuration values,
 * and shared data structures used throughout the Sentirama application.
 */

// App metadata
export const APP_NAME = 'Sentirama';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Track, understand, and learn from your emotions';

/**
 * Primary Emotions
 *
 * The three core emotional states that form the foundation of emotion tracking.
 * Each emotion includes visual styling (colors, icons) and descriptive labels.
 *
 * @typedef {Object} PrimaryEmotion
 * @property {string} color - Primary hex color for the emotion
 * @property {string} icon - Emoji icon representation
 * @property {string} label - Display label for the emotion
 *
 * Usage:
 * import { EMOTIONS } from '@/utils/constants';
 * const madColor = EMOTIONS.mad.color; // '#C85A54'
 */
export const EMOTIONS = {
  mad: {
    color: '#C85A54',
    icon: '😠',
    label: 'Mad'
  },
  peaceful: {
    color: '#7DB57D',
    icon: '😌',
    label: 'Peaceful'
  },
  sad: {
    color: '#4A7C8C',
    icon: '😢',
    label: 'Sad'
  }
};

/**
 * Refined Emotions
 *
 * Detailed emotional states that provide nuanced understanding of feelings.
 * Each refined emotion includes a definition and practical example to help
 * users accurately identify and label their emotional experiences.
 *
 * @typedef {Object} RefinedEmotion
 * @property {string} definition - Clear explanation of the emotion
 * @property {string} example - Real-world scenario demonstrating the emotion
 *
 * Usage:
 * import { REFINED_EMOTIONS } from '@/utils/constants';
 * const loving = REFINED_EMOTIONS.loving;
 * console.log(loving.definition); // 'Feeling deep affection and care...'
 */
export const REFINED_EMOTIONS = {
  thoughtful: {
    definition: 'Engaging in careful consideration and reflection',
    example: 'Contemplating a difficult decision or pondering life\'s deeper questions'
  },
  intimate: {
    definition: 'Experiencing close personal connection and vulnerability',
    example: 'Sharing personal stories with a trusted friend or partner'
  },
  loving: {
    definition: 'Feeling deep affection and care for someone or something',
    example: 'Spending quality time with family or caring for a beloved pet'
  },
  trusting: {
    definition: 'Having confidence and faith in others or situations',
    example: 'Delegating important tasks to colleagues or opening up to someone new'
  },
  nurturing: {
    definition: 'Providing care, support, and encouragement for growth',
    example: 'Helping a child learn something new or supporting a friend through challenges'
  },
  pensive: {
    definition: 'Being in a state of deep or serious thought',
    example: 'Reflecting quietly on past experiences or contemplating future possibilities'
  },
  relaxed: {
    definition: 'Feeling calm, at ease, and free from tension',
    example: 'Unwinding after a long day or enjoying a peaceful moment in nature'
  },
  responsive: {
    definition: 'Being attentive and reactive to others\' needs or situations',
    example: 'Actively listening to someone\'s concerns and offering thoughtful support'
  },
  serene: {
    definition: 'Experiencing profound calm and inner peace',
    example: 'Meditating, watching a sunset, or feeling completely at peace'
  },
  sentimental: {
    definition: 'Feeling tender emotions connected to memories or nostalgia',
    example: 'Looking through old photos or revisiting a meaningful place from your past'
  },
  thankful: {
    definition: 'Experiencing gratitude and appreciation',
    example: 'Recognizing the kindness of others or appreciating life\'s blessings'
  }
};

/**
 * Context Tags
 *
 * Categories for the situations or environments where emotions occur.
 * Used to help identify patterns between emotional states and life contexts.
 *
 * Usage:
 * import { CONTEXT_TAGS } from '@/utils/constants';
 * const tags = CONTEXT_TAGS; // ['work', 'home', 'transit', 'social', 'other']
 */
export const CONTEXT_TAGS = ['work', 'home', 'transit', 'social', 'other'];

/**
 * UI Color Palette
 *
 * Consistent color scheme for all UI elements throughout the application.
 * Use these colors to maintain visual consistency and accessibility.
 *
 * @typedef {Object} UIColors
 * @property {string} primary - Primary brand color for main actions
 * @property {string} secondary - Secondary color for supporting elements
 * @property {string} success - Color for successful operations
 * @property {string} warning - Color for warning messages
 * @property {string} error - Color for error states
 * @property {string} info - Color for informational messages
 * @property {string} background - Main background color
 * @property {string} surface - Card and surface backgrounds
 * @property {string} text - Primary text color
 * @property {string} textSecondary - Secondary/muted text color
 * @property {string} border - Border and divider color
 *
 * Usage:
 * import { COLOURS } from '@/utils/constants';
 * const buttonColor = COLOURS.primary; // '#4A90E2'
 */
export const COLOURS = {
  primary: '#4A90E2',
  secondary: '#6F5FD4',
  success: '#50C878',
  warning: '#F5A623',
  error: '#E74C3C',
  info: '#5BC0DE',
  background: '#F8F9FA',
  surface: '#FFFFFF',
  text: '#334155',
  textSecondary: '#64748B',
  border: '#E2E8F0'
};

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
