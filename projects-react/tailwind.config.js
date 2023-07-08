/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        LightBGblue: "hsl(252, 100%, 67%)",
        LightBGroyalblue: "hsl(241, 81%, 54%)",

        VioletBlue: "hsla(256, 72%, 46%, 1)",
        PersianBlue: "hsla(241, 72%, 46%, 0)",

        LightRed: "hsl(0, 100%, 67%)",
        LightRedBG: "hsl(0, 100%, 67%, 0.1)",
        OrangeyYellow:" hsl(39, 100%, 56%)",
        OrangeyYellowBG:" hsl(39, 100%, 56%, 0.1)",
        GreenTeal: "hsl(166, 100%, 37%)",
        GreenTealBG: "hsl(166, 100%, 37%, 0.1)",
        CobaltBlue: "hsl(234, 85%, 45%)",
        CobaltBlueBG: "hsl(234, 85%, 45%, 0.1)",

        White: "hsl(0, 0%, 100%)",
        Paleblue: "hsl(221, 100%, 96%)",
        Lightlavender: "hsl(241, 100%, 89%)",
        Darkgrayblue: "hsl(224, 30%, 27%)"
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        hanken: 'var(--font-hanken)',
        poppins: 'var(--font-poppins)',
      }
    },
  },
  plugins: [],
}
