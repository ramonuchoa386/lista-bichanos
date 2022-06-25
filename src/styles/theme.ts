interface IColors {
	[key: string]: string
}

interface IFontSizes {
	[key: string]: string
}

export interface IThemeType {
	colors: IColors
	fontSizes: IFontSizes
}

const theme = {
	colors: {
		lightGrey: "#c2c7ca",
		grey: "#ebeff3",
		paleGrey: "#abb3b6",
		darkGrey: "#545454",
		slateGrey: "#a7b9ce",
		starRated: "#40b186",
		lightBlue: "#4480c4",
		blue: "#2e578b",
		paleBlue: "#3767a2",
	},
	fontSizes: {
		small: ".625rem",
		regular: "1rem",
		big: "1.5rem",
	},
}

export default theme
