/** @type {import('tailwindcss').Config} */
module.exports = {
	content: {
		relative: true,
		files: ['/public/index.html'],
		theme: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
		},
		plugins: [],
	},
};
