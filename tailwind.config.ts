import type { Config } from 'tailwindcss';
import colors from './ui/theme/colors.js';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './hook-form/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
export default config
