import { Fira_Code } from 'next/font/google';

export const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  display: 'swap',  // This will fallback to a system font if the font fails to load
});
