import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#010932',
        'custom-light-blue': '#081247',
      },
      fontFamily: {
        'patrick-hand': ['var(--font-patrick-hand)'],
      },
    },
  },
  plugins: [],
};
export default config;
