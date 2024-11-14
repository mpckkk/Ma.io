import { NextApiRequest, NextApiResponse } from 'next';
import { getALLTimeSinceToday, getReadStats } from '@/services/wakatime';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // Fetch data from WakaTime services
    const readStatsResponse = await getReadStats();
    const allTimeSinceTodayResponse = await getALLTimeSinceToday();

    // Verify if the responses have valid data
    if (!readStatsResponse || !readStatsResponse.data) {
      throw new Error('Failed to fetch read stats data');
    }
    if (!allTimeSinceTodayResponse || !allTimeSinceTodayResponse.data) {
      throw new Error('Failed to fetch all-time-since-today data');
    }

    // Set caching headers
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

    // Combine and respond with the fetched data
    const data = {
      ...readStatsResponse.data,
      all_time_since_today: allTimeSinceTodayResponse.data,
    };
    res.status(200).json(data);

  } catch (error) {
    // Log the error details for debugging
    console.error('API error in /api/read-stats:', error);

    // Send a specific error message if available, otherwise default to 'Internal Server Error'
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    res.status(500).json({ message });
  }
}
