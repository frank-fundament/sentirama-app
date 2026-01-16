/**
 * Form Validation Utilities
 */

import { MIN_PASSWORD_LENGTH, MAX_NOTE_LENGTH } from './constants';

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {Object} Validation result
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || email.trim() === '') {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address'
    };
  }

  return {
    isValid: true,
    error: null
  };
};

/**
 * Validate password
 * @param {string} password - Password to validate
 * @returns {Object} Validation result
 */
export const validatePassword = (password) => {
  if (!password || password.trim() === '') {
    return {
      isValid: false,
      error: 'Password is required'
    };
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return {
      isValid: false,
      error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`
    };
  }

  return {
    isValid: true,
    error: null
  };
};

/**
 * Validate note text
 * @param {string} note - Note to validate
 * @returns {Object} Validation result
 */
export const validateNote = (note) => {
  if (!note || note.trim() === '') {
    return {
      isValid: true, // Notes are optional
      error: null
    };
  }

  if (note.length > MAX_NOTE_LENGTH) {
    return {
      isValid: false,
      error: `Note must be less than ${MAX_NOTE_LENGTH} characters`
    };
  }

  return {
    isValid: true,
    error: null
  };
};

/**
 * Validate name
 * @param {string} name - Name to validate
 * @returns {Object} Validation result
 */
export const validateName = (name) => {
  if (!name || name.trim() === '') {
    return {
      isValid: false,
      error: 'Name is required'
    };
  }

  if (name.trim().length < 2) {
    return {
      isValid: false,
      error: 'Name must be at least 2 characters'
    };
  }

  if (name.length > 30) {
    return {
      isValid: false,
      error: 'Name must be less than 30 characters'
    };
  }

  return {
    isValid: true,
    error: null
  };
};

/**
 * Validate entire emotion record form
 * @param {Object} formData - Form data to validate
 * @returns {Object} Validation result with field errors
 */
export const validateEmotionRecord = (formData) => {
  const errors = {};
  let isValid = true;

  // Emotion is required
  if (!formData.emotion) {
    errors.emotion = 'Please select an emotion';
    isValid = false;
  }

  // Validate note if provided
  const noteValidation = validateNote(formData.notes);
  if (!noteValidation.isValid) {
    errors.notes = noteValidation.error;
    isValid = false;
  }

  return {
    isValid,
    errors
  };
};

export default {
  validateEmail,
  validatePassword,
  validateNote,
  validateName,
  validateEmotionRecord
};
