// import { Fira_Code, Plus_Jakarta_Sans, Sora } from 'next/font/google';

// export const jakartaSans = Plus_Jakarta_Sans({
//   variable: '--jakartaSans-font',
//   subsets: ['latin'],
//   display: 'fallback',
//   weight: ['400', '500', '600', '700', '800'],
// });

// export const firaCode = Fira_Code({
//   variable: '--font-fira-code',
//   subsets: ['latin'],
//   display: 'swap',
// });

// export const soraSans = Sora({
//   variable: '--soraSans-font',
//   subsets: ['latin'],
//   display: 'fallback',
//   weight: ['300', '400', '500', '600', '700', '800'],
// });
/* global.css */
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2') format('woff2'),
       url('/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Fira Code';
  src: url('/fonts/fira-code/FiraCode-Regular.woff2') format('woff2'),
       url('/fonts/fira-code/FiraCode-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Sora';
  src: url('/fonts/sora/Sora-Regular.woff2') format('woff2'),
       url('/fonts/sora/Sora-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
