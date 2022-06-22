interface IColors {
	[key: string]: string
}

export interface ThemeType {
	colors: IColors
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
}

export default theme
