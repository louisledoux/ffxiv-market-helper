module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBackground: '#313131',
        darkBackground: '#242424',
        primary: '#DCAC4E',
        positive: '#219D1F',
        negative: '#AF2424',
        neutralGrey: '#6C6C6C',
      },
      boxShadow: {
        defaultShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        xxs: ['0.6rem', '0.8rem'],
        small: ['0.65rem', '0.8rem'],
      },
    },
  },
  plugins: [],
};
