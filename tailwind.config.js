module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '992px',
      lg: '1170px',
    },
    colors: {
      black: 'rgba(51, 51, 51, 1)',
      slate: 'rgba(51, 51, 51, 0.5)',
      grey: 'rgba(51, 51, 51, 0.35)',
      background: 'rgba(241, 241, 241, 1)',
      chalk: 'rgba(239, 239, 239, 1)',
      white: 'rgba(255, 255, 255, 1)',
      green: 'rgba(0, 156, 6, 1)',
      red: 'rgba(216, 19, 49, 1)',
    },
    fontFamily: {
      sans: ['Roobert', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      h1: ['4rem', '115%'],
      h2: ['2rem', '140%'],
      h3: ['1.25rem', '115%'],
      p: ['1.125rem', '180%'],
    },
    extend: {
      maxWidth: {
        sections: '1500px',
        headline: '970px',
        content: '770px',
      },
      spacing: {
        grid: '105px',
        highlight: '90px',
        herom: '-23.07695%',
        herop: '23.07695%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
