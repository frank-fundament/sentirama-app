/**
 * Geohash Utility Functions
 * Handles GPS to geohash conversion and area name resolution
 */

import * as Geohash from 'geohash';
import { GEOHASH_PRECISION, LOCATION_PRECISION } from './constants';

/**
 * Convert GPS coordinates to geohash
 * @param {number} latitude - Latitude coordinate
 * @param {number} longitude - Longitude coordinate
 * @param {string} precision - Precision level ('city' or 'neighbourhood')
 * @returns {string} Geohash string
 */
export const convertGPSToGeohash = (latitude, longitude, precision = LOCATION_PRECISION.NEIGHBOURHOOD) => {
  try {
    if (!latitude || !longitude) {
      throw new Error('Invalid coordinates');
    }

    if (latitude < -90 || latitude > 90) {
      throw new Error('Latitude must be between -90 and 90');
    }

    if (longitude < -180 || longitude > 180) {
      throw new Error('Longitude must be between -180 and 180');
    }

    const geohashPrecision = GEOHASH_PRECISION[precision] || 5;
    return Geohash.encode(latitude, longitude, geohashPrecision);
  } catch (error) {
    console.error('Error converting GPS to geohash:', error);
    throw error;
  }
};

/**
 * Decode geohash to coordinates
 * @param {string} geohash - Geohash string
 * @returns {Object} Object with latitude and longitude
 */
export const decodeGeohash = (geohash) => {
  try {
    if (!geohash) {
      throw new Error('Invalid geohash');
    }

    const decoded = Geohash.decode(geohash);
    return {
      latitude: decoded.latitude,
      longitude: decoded.longitude
    };
  } catch (error) {
    console.error('Error decoding geohash:', error);
    throw error;
  }
};

/**
 * Get bounding box for a geohash
 * @param {string} geohash - Geohash string
 * @returns {Object} Bounding box with min/max lat/lng
 */
export const getGeohashBounds = (geohash) => {
  try {
    if (!geohash) {
      throw new Error('Invalid geohash');
    }

    const bounds = Geohash.decode_bbox(geohash);
    return {
      minLat: bounds[0],
      minLng: bounds[1],
      maxLat: bounds[2],
      maxLng: bounds[3]
    };
  } catch (error) {
    console.error('Error getting geohash bounds:', error);
    throw error;
  }
};

/**
 * Get area name from geohash using reverse geocoding
 * NOTE: This is a simplified version. In production, use a geocoding service.
 * @param {string} geohash - Geohash string
 * @returns {Promise<string>} Area name
 */
export const getAreaNameFromGeohash = async (geohash) => {
  try {
    const { latitude, longitude } = decodeGeohash(geohash);

    // In production, use a geocoding service like:
    // - Google Maps Geocoding API
    // - OpenStreetMap Nominatim
    // - Mapbox Geocoding API

    // For now, return a formatted coordinate string
    return `${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`;

    // Example using Nominatim (OSM):
    // const response = await fetch(
    //   `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    // );
    // const data = await response.json();
    // return data.display_name || 'Unknown location';
  } catch (error) {
    console.error('Error getting area name:', error);
    return 'Unknown location';
  }
};

/**
 * Calculate distance between two geohashes (in kilometers)
 * @param {string} geohash1 - First geohash
 * @param {string} geohash2 - Second geohash
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (geohash1, geohash2) => {
  try {
    const point1 = decodeGeohash(geohash1);
    const point2 = decodeGeohash(geohash2);

    const R = 6371; // Earth's radius in km
    const dLat = toRadians(point2.latitude - point1.latitude);
    const dLon = toRadians(point2.longitude - point1.longitude);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(point1.latitude)) *
        Math.cos(toRadians(point2.latitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  } catch (error) {
    console.error('Error calculating distance:', error);
    return 0;
  }
};

/**
 * Convert degrees to radians
 * @param {number} degrees
 * @returns {number} Radians
 */
const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Get neighbors of a geohash
 * @param {string} geohash - Geohash string
 * @returns {Array<string>} Array of neighboring geohashes
 */
export const getNeighbors = (geohash) => {
  try {
    return Geohash.neighbors(geohash);
  } catch (error) {
    console.error('Error getting neighbors:', error);
    return [];
  }
};

export default {
  convertGPSToGeohash,
  decodeGeohash,
  getGeohashBounds,
  getAreaNameFromGeohash,
  calculateDistance,
  getNeighbors
};
