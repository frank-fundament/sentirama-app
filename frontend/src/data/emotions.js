/**
 * Emotion Data Structure
 * Defines primary and refined emotions with their properties
 */

export const EMOTIONS = {
  primary: {
    mad: {
      color: '#C85A54',
      light: '#E8D4CF',
      dark: '#A04841',
      label: 'Mad',
      icon: '😠',
      description: 'Feeling angry, frustrated, or irritated'
    },
    peaceful: {
      color: '#7DB57D',
      light: '#D4E8D4',
      dark: '#5E8F5E',
      label: 'Peaceful',
      icon: '😌',
      description: 'Feeling calm, content, or at ease'
    },
    sad: {
      color: '#4A7C8C',
      light: '#CFD4E8',
      dark: '#3A6270',
      label: 'Sad',
      icon: '😢',
      description: 'Feeling down, disappointed, or unhappy'
    }
  },

  refined: {
    // Mad variants
    frustrated: {
      primary: 'mad',
      color: '#D47D77',
      label: 'Frustrated',
      definition: 'Feeling blocked or prevented from achieving something',
      example: 'When technology doesn\'t work as expected',
      physicalSigns: 'Tension, clenched jaw, restlessness',
      copingStrategies: 'Take a break, identify the obstacle, problem-solve systematically'
    },
    angry: {
      primary: 'mad',
      color: '#C85A54',
      label: 'Angry',
      definition: 'Intense displeasure or hostility towards a situation or person',
      example: 'When someone treats you unfairly',
      physicalSigns: 'Raised heart rate, muscle tension, heat in face',
      copingStrategies: 'Deep breathing, physical exercise, express feelings constructively'
    },
    annoyed: {
      primary: 'mad',
      color: '#D99088',
      label: 'Annoyed',
      definition: 'Mild irritation or displeasure',
      example: 'When interrupted repeatedly while working',
      physicalSigns: 'Eye rolling, sighing, impatience',
      copingStrategies: 'Acknowledge the feeling, set boundaries, practice patience'
    },

    // Peaceful variants
    calm: {
      primary: 'peaceful',
      color: '#7DB57D',
      label: 'Calm',
      definition: 'A state of mental and emotional steadiness',
      example: 'After meditation or spending time in nature',
      physicalSigns: 'Slow breathing, relaxed muscles, clear thinking',
      copingStrategies: 'Maintain routines, practice mindfulness, limit overstimulation'
    },
    content: {
      primary: 'peaceful',
      color: '#96C396',
      label: 'Content',
      definition: 'Satisfied with current circumstances',
      example: 'Enjoying a quiet evening at home',
      physicalSigns: 'Relaxed posture, gentle smile, ease',
      copingStrategies: 'Practice gratitude, savor the moment, maintain balance'
    },
    relaxed: {
      primary: 'peaceful',
      color: '#A8D5BA',
      label: 'Relaxed',
      definition: 'Free from tension and anxiety',
      example: 'On vacation or during leisure time',
      physicalSigns: 'Loose muscles, slow heartbeat, easy breathing',
      copingStrategies: 'Regular breaks, hobbies, stress management'
    },

    // Sad variants
    disappointed: {
      primary: 'sad',
      color: '#5E8C9C',
      label: 'Disappointed',
      definition: 'Sadness from unmet expectations',
      example: 'When plans don\'t work out as hoped',
      physicalSigns: 'Heavy feeling, slumped posture, sighing',
      copingStrategies: 'Adjust expectations, find alternatives, practice self-compassion'
    },
    lonely: {
      primary: 'sad',
      color: '#4A7C8C',
      label: 'Lonely',
      definition: 'Feeling isolated or disconnected from others',
      example: 'Being away from loved ones',
      physicalSigns: 'Empty feeling, low energy, withdrawal',
      copingStrategies: 'Reach out to others, join communities, practice self-care'
    },
    melancholy: {
      primary: 'sad',
      color: '#6B92A4',
      label: 'Melancholy',
      definition: 'A deep, pensive sadness',
      example: 'Reflecting on bittersweet memories',
      physicalSigns: 'Quiet demeanor, tearfulness, introspection',
      copingStrategies: 'Allow yourself to feel, journal, talk to someone, seek beauty'
    },

    // Additional emotions
    thoughtful: {
      primary: 'peaceful',
      color: '#A8D5BA',
      label: 'Thoughtful',
      definition: 'Engaged in careful consideration',
      example: 'Contemplating an important decision',
      physicalSigns: 'Furrowed brow, quiet demeanor, slower movements',
      copingStrategies: 'Allow time for reflection, journal, discuss with trusted others'
    },
    scared: {
      primary: 'sad',
      color: '#D4A574',
      label: 'Scared',
      definition: 'Feeling fear or apprehension',
      example: 'Facing an uncertain situation',
      physicalSigns: 'Racing heart, sweating, tension, alertness',
      copingStrategies: 'Deep breathing, challenge worried thoughts, seek support'
    },
    powerful: {
      primary: 'peaceful',
      color: '#B57D7D',
      label: 'Powerful',
      definition: 'Feeling strong, capable, and in control',
      example: 'After achieving a goal',
      physicalSigns: 'Upright posture, confident movements, energy',
      copingStrategies: 'Channel energy positively, set boundaries, stay grounded'
    },
    joyful: {
      primary: 'peaceful',
      color: '#F4C542',
      label: 'Joyful',
      definition: 'Experiencing great happiness and delight',
      example: 'Celebrating with loved ones',
      physicalSigns: 'Laughter, bright eyes, high energy, warmth',
      copingStrategies: 'Share joy with others, savor moments, practice gratitude'
    },
    surprised: {
      primary: 'peaceful',
      color: '#F28C82',
      label: 'Surprised',
      definition: 'Unexpected reaction to something unanticipated',
      example: 'Receiving unexpected good news',
      physicalSigns: 'Widened eyes, raised eyebrows, gasping',
      copingStrategies: 'Take a moment to process, embrace the unexpected, stay present'
    }
  }
};

export const CONTEXT_TAGS = [
  { id: 'work', label: 'Work', icon: '💼' },
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'social', label: 'Social', icon: '👥' },
  { id: 'transit', label: 'Transit', icon: '🚗' },
  { id: 'exercise', label: 'Exercise', icon: '🏃' },
  { id: 'nature', label: 'Nature', icon: '🌳' },
  { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
  { id: 'alone', label: 'Alone', icon: '🧘' },
  { id: 'eating', label: 'Eating', icon: '🍽️' },
  { id: 'sleeping', label: 'Sleeping', icon: '😴' },
  { id: 'entertainment', label: 'Entertainment', icon: '🎭' },
  { id: 'learning', label: 'Learning', icon: '📚' }
];

export default EMOTIONS;
