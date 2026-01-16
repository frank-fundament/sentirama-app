/**
 * Cloud Functions for Sentirama
 *
 * This file exports all Cloud Functions for the Sentirama application.
 */

import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin
initializeApp();
const db = getFirestore();

/**
 * Trigger when a new emotion is created
 * Aggregates emotion data by location
 */
export const onEmotionCreate = onDocumentCreated(
  'users/{userId}/emotions/{emotionId}',
  async (event) => {
    try {
      const emotion = event.data.data();
      const { userId, emotionId } = event.params;

      console.log('New emotion recorded:', {
        userId,
        emotionId,
        emotion: emotion.emotion,
        category: emotion.category
      });

      // TODO: Implement aggregation logic
      // 1. Extract geohash if location is enabled
      // 2. Update /locations/{areaId}/aggregated document
      // 3. Increment emotion counters
      // 4. Calculate heatmap value

      return null;
    } catch (error) {
      console.error('Error processing emotion creation:', error);
      throw error;
    }
  }
);

/**
 * Scheduled function to generate daily summaries
 * Runs every day at 2 AM UTC
 */
export const generateDailySummary = onSchedule('0 2 * * *', async (event) => {
  try {
    console.log('Generating daily summary...');

    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    const tomorrow = new Date(yesterday);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // TODO: Implement daily summary logic
    // 1. Query all emotions from last 24 hours
    // 2. Calculate emotion distribution
    // 3. Identify top emotions and regions
    // 4. Store summary in /analytics/{date}/summary
    // 5. Update heatmap values

    console.log('Daily summary generated successfully');
    return null;
  } catch (error) {
    console.error('Error generating daily summary:', error);
    throw error;
  }
});

/**
 * Scheduled function to delete old records
 * Runs daily to enforce retention policy
 */
export const deleteOldRecords = onSchedule('0 3 * * *', async (event) => {
  try {
    console.log('Cleaning up old records...');

    const retentionDays = 90; // Keep records for 90 days
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - retentionDays);

    // TODO: Implement cleanup logic
    // 1. Query old emotion entries
    // 2. Batch delete in chunks
    // 3. Log cleanup summary

    console.log('Cleanup completed successfully');
    return null;
  } catch (error) {
    console.error('Error during cleanup:', error);
    throw error;
  }
});
