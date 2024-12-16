import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('/hero1.png')",
        SignUp: "url(/SignUp.png)",
      },
      // screens: {
  		// 	sm: '640px',
  		// 	md: '768px',
  		// 	lg: '1024px',
  		// 	xl: '1280px',
      //   mx: '1440px'
  		// },
    },
  },
  plugins: [],
};
export default config;
