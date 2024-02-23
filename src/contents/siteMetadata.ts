export const siteMetadata = {
  siteUrl: 'https://brian.style',
  siteRepo: 'https://github.com/BrianShenCC/brian.style',
  siteLogo: '/images/logo.png',
  siteShortTitle: 'Brian',
  siteTitle: "Brian's coding journey",
  siteScreenshot: '',
  siteDescription:
    'Self-motivated and creative developer. With more than 10 years of work experience in the tech industry, I strive to create responsive and user-friendly websites and web applications. Front-end addicted, Fullstack capable, with a strong emphasis on Typescript.',
  author: 'Brian Shen',
  fullName: 'Haoxiang Shen',
  location: 'Canada',
  timeZone: 'Canada/Eastern',
  locationIcon: '🇨🇦',
  // locationIcon: 'flag-china',
  position: 'Full Stack Web Developer',
  company: '',
  companySite: '',
  locale: 'en-US',
  image: '/images/logo.png',
  socialBanner: '/images/logo.png',
  profileCover: 'https://static.webjam.cn/images/bg/wew.png',
  analytics: {
    // plausibleDataDomain: '',
    // simpleAnalytics: false, // true | false
    analyticsURL: '',
    umamiScriptSrc: '',
    umamiSiteId: '',
    // googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },

  postPageSize: 9,
};

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export const commentConfig = {
  enable: false,
  provider: 'giscus',
  // https://giscus.app/
  giscusConfig: {
    gitUsername: '',
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: true,
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
    lang: 'zh-CN',
  },
};

export const socialAccounts = {
  x: '',
  instagram: '',
  email: 'shenhaoxiang1990@gmail.com',
  github: 'https://github.com/BrianShenCC',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/brian-shen-0b0716245/',
};

export const author = {
  name: 'Brian Shen',
  location: 'Canada',
  timeZone: 'Canada/Eastern',
  locationIcon: '🇨🇦',
  position: 'Full Stack Web Developer',
  calMeetingUrl: '',
  status: 'Working remotely around the world',
  workingOn: `I am learning and practicing the latest AI technology.`,
  workTogether: `I'm open for new opportunities, feel free to email me to see how can we collaborate.`,
  wakatime: 'https://wakatime.com/@BrianShen',
  github_accounts: [
    {
      username: 'BrianShenCC',
      token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
      endpoint: '/api/github?type=personal',
      type: 'personal',
      is_active: true,
    },
  ],
};

export const featureSwich = {
  // chatGPT
  ai: false,
  contactForm: true,
  meeting: false,
  guestbook: false,
  spotify: false,
  dashboard_wakatime: false,
  dashboard_github: true,
  topBanner: false,
};
