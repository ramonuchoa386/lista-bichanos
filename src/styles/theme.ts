interface IThemeProps {
	[key: string]: string;
}

export interface IThemeType {
	colors: IThemeProps;
	fontSizes: IThemeProps;
	breakpoints: IThemeProps;
}

const theme = {
	colors: {
		white: '#fff',
		offWhite: '#abbcd0',
		lightGrey: '#c2c7ca',
		grey: '#ebeff3',
		paleGrey: '#abb3b6',
		darkGrey: '#545454',
		slateGrey: '#a7b9ce',
		starRated: '#40b186',
		lightBlue: '#4480c4',
		blue: '#2e578b',
		paleBlue: '#3767a2',
	},
	fontSizes: {
		small: '.625rem',
		regular: '1rem',
		big: '1.5rem',
	},
	breakpoints: {
		mobile: '320px',
		tablet: '768px',
		desktop: '1280px',
	},
};

export default theme;
