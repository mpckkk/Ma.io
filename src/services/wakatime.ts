// /* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios';

// const API_KEY = process.env.WAKATIME_API_KEY;

// const STATS_ENDPOINT = 'https://wakatime.com/api/v1/users/current/stats';
// const ALL_TIME_SINCE_TODAY =
//   'https://wakatime.com/api/v1/users/current/all_time_since_today';

// export const getReadStats = async (): Promise<{
//   status: number;
//   data: any;
// }> => {
//   const response = await axios.get(`${STATS_ENDPOINT}/last_7_days`, {
//     headers: {
//       Authorization: `Basic ${API_KEY}`,
//     },
//   });

//   const status = response.status;

//   if (status >= 400) return { status, data: [] };

//   const getData = response.data;

//   const start_date = getData?.data?.start;
//   const end_date = getData?.data?.end;
//   const last_update = getData?.data?.modified_at;

//   const categories = getData?.data?.categories;

//   const best_day = {
//     date: getData?.data?.best_day?.date,
//     text: getData?.data?.best_day?.text,
//   };
//   const human_readable_daily_average =
//     getData?.data?.human_readable_daily_average_including_other_language;
//   const human_readable_total =
//     getData?.data?.human_readable_total_including_other_language;

//   const languages = getData?.data?.languages?.slice(0, 3);
//   const editors = getData?.data?.editors;

//   return {
//     status,
//     data: {
//       last_update,
//       start_date,
//       end_date,
//       categories,
//       best_day,
//       human_readable_daily_average,
//       human_readable_total,
//       languages,
//       editors,
//     },
//   };
// };

// export const getALLTimeSinceToday = async (): Promise<{
//   status: number;
//   data: any;
// }> => {
//   const response = await axios.get(ALL_TIME_SINCE_TODAY, {
//     headers: {
//       Authorization: `Basic ${API_KEY}`,
//     },
//   });

//   const status = response.status;

//   if (status >= 400) return { status, data: {} };

//   const getData = response.data;

//   const data = {
//     text: getData?.data?.text,
//     total_seconds: getData?.data?.total_seconds,
//   };

//   return {
//     status,
//     data,
//   };
// };


/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_KEY = process.env.WAKATIME_API_KEY;

if (!API_KEY) {
  console.error('Error: WAKATIME_API_KEY is not defined in environment variables.');
  process.exit(1); // Exit the process if the API key is missing
}

const STATS_ENDPOINT = 'https://wakatime.com/api/v1/users/current/stats';
const ALL_TIME_SINCE_TODAY =
  'https://wakatime.com/api/v1/users/current/all_time_since_today';

// Helper function to get the encoded authorization header
const getAuthHeader = (): string => {
  const encodedKey = Buffer.from(`${API_KEY}:`).toString('base64');
  return `Basic ${encodedKey}`;
};

// Fetch stats for the last 7 days
export const getReadStats = async (): Promise<{
  status: number;
  data: any;
}> => {
  try {
    const response = await axios.get(`${STATS_ENDPOINT}/last_7_days`, {
      headers: {
        Authorization: getAuthHeader(),
      },
    });

    const { data } = response.data;
    const status = response.status;

    return {
      status,
      data: {
        last_update: data?.modified_at,
        start_date: data?.start,
        end_date: data?.end,
        categories: data?.categories,
        best_day: {
          date: data?.best_day?.date,
          text: data?.best_day?.text,
        },
        human_readable_daily_average: data?.human_readable_daily_average_including_other_language,
        human_readable_total: data?.human_readable_total_including_other_language,
        languages: data?.languages?.slice(0, 3),
        editors: data?.editors,
      },
    };
  } catch (error: any) {
    console.error('Error fetching WakaTime stats:', error.response?.data || error.message);
    return {
      status: error.response?.status || 500,
      data: [],
    };
  }
};

// Fetch all-time stats
export const getALLTimeSinceToday = async (): Promise<{
  status: number;
  data: any;
}> => {
  try {
    const response = await axios.get(ALL_TIME_SINCE_TODAY, {
      headers: {
        Authorization: getAuthHeader(),
      },
    });

    const { data } = response.data;
    const status = response.status;

    return {
      status,
      data: {
        text: data?.text,
        total_seconds: data?.total_seconds,
      },
    };
  } catch (error: any) {
    console.error('Error fetching WakaTime all-time stats:', error.response?.data || error.message);
    return {
      status: error.response?.status || 500,
      data: {},
    };
  }
};
