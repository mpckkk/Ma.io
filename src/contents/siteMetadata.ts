export const siteMetadata = {
  siteUrl: 'https://Ma.io',
  siteRepo: 'https://github.com/mpckkk/Ma.io',
  siteLogo: '/images/logo.png',
  siteShortTitle: 'Pengchong Ma',
  siteTitle: 'Coding Journey',
  siteScreenshot: '',
  siteDescription:
    '',
  author: 'Pengchong Ma',
  fullName: 'Pengchong Ma',
  location: '',
  timeZone: '',
  locationIcon: '',
  position: 'Research Assistant',
  company: 'UNL',
  companySite: 'https:unl.edu',
  locale: 'en-US',
  image: '/images/logo.png',
  socialBanner: '/images/logo.png',
  profileCover: 'https://static.webjam.cn/images/bg/wew.png',
  postPageSize: 9,
  analytics: {
    analyticsURL: '', // Add your analytics URL here
    umamiScriptSrc: '', // Replace with actual Umami script URL
    umamiSiteId: '', // Replace with actual Umami site ID
  },
};

export const commentConfig = {
  enable: true,
  provider: 'giscus',
  giscusConfig: {
    gitUsername: 'mpckkk',
    repo: 'Ma.io',
    repositoryId: 'R_kgDOLMlj6g',
    category: 'Announcements',
    categoryId: 'DIC_kwDOLMlj6s4CdnEb',
    mapping: 'title',
    reactions: true,
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
    lang: 'en',
  },
};

export const socialAccounts = {
  x: '',
  twiteer: '',  
  instagram: 'https://www.instagram.com/pcmmm_/',
  email: 'pma5@unl.edu',
  github: 'https://github.com/mpckkk',
  linkedin: 'https://www.linkedin.com/in/pengchong-m-18bb39135/',
  googlescholar: 'https://scholar.google.com/citations?hl=en&user=bNvdHHMAAAAJ',
};

export const author = {
  name: 'PengchongMa',
  location: 'Lincoln',
  timeZone: 'American/Chicago',
  locationIcon: '',
  status:'',
  position: 'Research Assistant',
  calMeetingUrl: '',
  workingOn: `I am exploring the intersection of bioinformatics and AI.`,
  workTogether: `I’m open to new collaborations, especially in bioinformatics single cell. Feel free to Email me to discuss potential opportunities.`,
  wakatime: 'https://wakatime.com/@PengchongMa',
  github_accounts: [
    {
      username: 'mpckkk',
      token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
      endpoint: '/api/github?type=personal',
      type: 'personal',
      is_active: true,
    },
  ],
};

export const featureSwich = {
  ai: false,
  contactForm: false,
  meeting: false,
  guestbook: false,
  spotify: true,
  dashboard_wakatime: true,
  dashboard_github: true,
  topBanner: false,
};

export const docSearch = {
  apiKey: '8bd02d235a2bcceb5e28b51b58ab10ba',
  indexName: 'Ma.io',
  appId: 'ZWVHSF5KWK',
};
