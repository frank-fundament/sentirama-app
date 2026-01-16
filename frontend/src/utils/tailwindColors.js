/**
 * Tailwind Color Extensions for Emotions
 *
 * This module exports emotion colors as Tailwind theme extensions.
 * These colors can be used in Tailwind classes throughout the application
 * to maintain consistent emotion-based styling.
 *
 * Usage in tailwind.config.js:
 * ```javascript
 * import { emotionColors } from './src/utils/tailwindColors';
 *
 * export default {
 *   theme: {
 *     extend: {
 *       colors: {
 *         ...emotionColors
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * Usage in components:
 * ```jsx
 * <div className="bg-emotion-mad text-white">Mad emotion</div>
 * <div className="bg-emotion-peaceful text-white">Peaceful emotion</div>
 * <div className="border-emotion-sad">Sad emotion border</div>
 * ```
 *
 * Usage with refined emotions:
 * ```jsx
 * <div className="bg-emotion-thoughtful">Thoughtful</div>
 * <div className="text-emotion-loving">Loving</div>
 * ```
 */

/**
 * Primary Emotion Colors
 *
 * The three core emotional states with their primary colors.
 * These match the EMOTIONS object in constants.js
 */
export const emotionColors = {
  'emotion-mad': '#C85A54',
  'emotion-peaceful': '#7DB57D',
  'emotion-sad': '#4A7C8C'
};

/**
 * Refined Emotion Colors
 *
 * Extended palette for nuanced emotional states.
 * Each refined emotion is assigned a color that relates to its primary emotion category.
 *
 * Color assignments:
 * - Peaceful family (green tones): loving, trusting, nurturing, relaxed, serene, thankful
 * - Thoughtful family (blue tones): thoughtful, pensive, intimate, responsive, sentimental
 */
export const refinedEmotionColors = {
  // Peaceful-related emotions (green tones)
  'emotion-loving': '#8BC68B',
  'emotion-trusting': '#9DD19D',
  'emotion-nurturing': '#6FA86F',
  'emotion-relaxed': '#A3D7A3',
  'emotion-serene': '#B5E3B5',
  'emotion-thankful': '#8DB98D',

  // Thoughtful-related emotions (blue tones)
  'emotion-thoughtful': '#5A8D9C',
  'emotion-pensive': '#668FA0',
  'emotion-intimate': '#7499A8',
  'emotion-responsive': '#82A3B0',
  'emotion-sentimental': '#90ADB8'
};

/**
 * All Emotion Colors Combined
 *
 * Complete palette including both primary and refined emotions.
 * This is the main export to use in your Tailwind configuration.
 */
export const allEmotionColors = {
  ...emotionColors,
  ...refinedEmotionColors
};

/**
 * Emotion Color Variants
 *
 * Light and dark variants for each primary emotion.
 * Useful for creating hover states, backgrounds, and visual hierarchy.
 *
 * Usage:
 * ```jsx
 * <div className="bg-emotion-mad-light hover:bg-emotion-mad">
 *   Hover to darken
 * </div>
 * ```
 */
export const emotionColorVariants = {
  // Mad variants
  'emotion-mad-light': '#E8D4CF',
  'emotion-mad': '#C85A54',
  'emotion-mad-dark': '#A04841',

  // Peaceful variants
  'emotion-peaceful-light': '#D4E8D4',
  'emotion-peaceful': '#7DB57D',
  'emotion-peaceful-dark': '#5E8F5E',

  // Sad variants
  'emotion-sad-light': '#CFD4E8',
  'emotion-sad': '#4A7C8C',
  'emotion-sad-dark': '#3A6270'
};

/**
 * Complete Color Export
 *
 * Includes all emotion colors and their variants.
 * Use this for the most comprehensive color palette.
 */
export const completeEmotionColors = {
  ...allEmotionColors,
  ...emotionColorVariants
};

// Default export for easy importing
export default completeEmotionColors;
