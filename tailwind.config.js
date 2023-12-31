/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    spacing: {
      0: '0px',
      3: '3px',
      4: '4px',
      5: "5px",
      9: "9px",
      10: "10px",
      14: "14px",
      15: "15px",
      16: "16px",
      20: "20px",
      25: "25px",
      32: "32px",
      48: "48px",
      64: "64px",
      68: "68px",
      70: "70px",
      80: "80px",
      100: "100px",
      240: "240px",
      288: "288px"
    },
    width: {
      'auto': 'auto',
      'px': '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '28.5': '7.125rem',
      '32': '8rem',
      '39': '9.75rem',
      '48': '12rem',
      '60': '15rem',
      '64': '16rem',
      '1/2': '50%',
      '2/3': '66.6%',
      'full': '100%',
    },
    height: {
      'auto': 'auto',
      'px': '1px',
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '10.5': '2.625rem',
      '12': '3rem',
      '13.5': '3.375rem',
      '15': '3.75rem',
      '16': '4rem',
      '17.5': '4.375rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      'gr-small': '38.46154%',
      'gr-large': '61.53846%',
      'full': '100%',
      'screen': '100vh',
      'screen-half': '60vh',
    },
    minHeight: {
      '0': '0',
      'full': '100%',
      'screen': '100vh',
      '42': '42px',
    },
    fontSize: theme => ({
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      ...theme('spacing'),
    }),
  },
  plugins: [],
};
