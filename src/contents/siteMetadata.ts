export const siteMetadata = {
  siteUrl: 'https://Ma.io',
  siteRepo: 'https://github.com/mpckkk/Ma.io',
  siteLogo: '/images/logo.png',
  siteShortTitle: 'Pengchong Ma',
  siteTitle: 'Coding Journey',
  siteScreenshot: '',
  siteDescription:
    'Self-motivated and dedicated developer with a passion for bioinformatics and data science. Leveraging over 10 years of experience in tech, I create intuitive and high-performance web applications with a focus on scientific research and data visualization. Skilled in full-stack development, with a specialization in modern web technologies and Typescript.',
  author: 'Pengchong Ma',
  fullName: 'Pengchong Ma',
  location: 'Lincoln, NE, USA',
  timeZone: 'America/Chicago',
  locationIcon: '🇺🇸',
  position: 'Full Stack Web Developer',
  company: '',
  companySite: '',
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
  instagram: '',
  email: 'pma5@unl.edu',
  github: 'https://github.com/mpckkk',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/pengchong-m-18bb39135/',
};

export const author = {
  name: 'Pengchong Ma',
  location: 'Lincoln, NE, USA',
  timeZone: 'America/Chicago',
  locationIcon: '🇺🇸',
  position: 'Research Assistant',
  calMeetingUrl: '',
  status: 'Hybrite',
  workingOn: `I am exploring the intersection of bioinformatics and AI, focusing on cutting-edge data analysis and visualization techniques.`,
  workTogether: `I’m open to new collaborations, especially in bioinformatics single cell and data science. Feel free to Email me to discuss potential opportunities.`,
  wakatime: 'https://wakatime.com/@BrianShen',
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
  contactForm: true,
  meeting: false,
  guestbook: false,
  spotify: false,
  dashboard_wakatime: false,
  dashboard_github: true,
  topBanner: false,
};

export const docSearch = {
  apiKey: 'd291a440fb755a9b202844a68064d4e9',
  indexName: 'BrianStyle',
  appId: 'A4M5OCLKX8',
};
