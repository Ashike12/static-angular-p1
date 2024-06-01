/** @type {import('tailwindcss').Config} */

const themeColors = require('./tailwind-colors');

module.exports = {
	prefix: 'tw-',
	content: ['./src/**/*.{html,ts}'],
	theme: {
    screens: {
      'xs': '600px',
      'sm': [
          {'min': '767px'},
          {'min': '768px', 'max': '959px'},
      ],
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': [
        { 'min': '1072px'},
        {
          'min': '1073px', 'max': '1279px'
        }
      ],
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#191B1E',
			'black-500': '#000000',
			'black-54': 'rgba(0, 0, 0, 0.54)',
			grey: '#7A8183',
			white: '#FFFFFF',
			blue: '#003CFF',
			bluelight: '#3F6CFF',
			'light-blue-700': '#0085FF',
			'dodger-blue-400': '#1FAFFF',
			'orient-800': '#005B8D',
			'linen-50': '#fdf2f2',
			'fun-green-800': '#008d38',
			'carrot-orange-500': '#f3921f',
			'heliotrope-500': '#d952ef',
			'bright-turquoise-400': '#1DF5CE',
			'indigo-400': '#3F6CFF',
			red: '#ff5353',
			'grey-16': 'rgba(122, 129, 131, 0.16)', // #7a8183 0.1 opacity
			'grey-24': 'rgba(122, 129, 131, 0.24)', // #7a8183 0.2 opacity
			'grey-40': 'rgba(238, 240, 244, 1)', // #eef0f4 1 opacity
			'grey-200': '#efefef',
			'grey-245': '#F5F6F7',
			'tea-40': 'rgba(212, 156, 28, 0.4)', // #d49c1c 0.4 opacity
			orange: '#ffa500',
			'neo-orange-50': '#fff7e7',
			'neo-orange-600': '#e8a111',
			primary: themeColors.primary,
			bw: themeColors.bw,
			'logo-primary': themeColors.logoPrimary,
			'logo-secondary': themeColors.logoSecondary,
			'logo-ternary': themeColors.logoTernary,
			'citrine-40': 'rgba(250, 247, 218, 0.4)', // #FAF7DA 40%
			'jade-green': '#05b75e',
			'white-smoke': '#fff0f0',
			'mint-cream': '#ebfff5',
			'viridian': '#3d8a79',
			'curious-blue-500': '#3498db',
		    'corn-500': '#f1c40f',
			'amethyst-600': '#9b59b6',
			'vivid-violet-600': '#8e44ad',
			'cinnabar-500': '#e74c3c',
			'tahiti-gold-500': '#e67e22',
			'teal-700': '#008080',
			'emerald-500': '#2ecc71'

		},
		fontSize: {},
		fontWeight: {
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700'
		},
		extend: {
			fontFamily: {
				sans: [
					'Lato', // main font family from style guide
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				]
			}
		},
	},
	plugins: []
};
