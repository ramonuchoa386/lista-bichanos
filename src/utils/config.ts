class AppConfig {
	private API_HOST: string;

	private API_CONTEXT: string;

	private API_URL: string;

	API_KEY: string;

	IMAGES_CONTEXT: string;

	SEARCH_IMAGES: string;

	GET_BREEDS: string;

	constructor(key?: string) {
		this.API_HOST = 'https://api.thecatapi.com';
		this.API_CONTEXT = '/v1';
		this.API_URL = this.API_HOST + this.API_CONTEXT;

		this.API_KEY = key || '';

		this.IMAGES_CONTEXT = `${this.API_URL}/images`;
		this.SEARCH_IMAGES = `${this.IMAGES_CONTEXT}/search`;

		this.GET_BREEDS = `${this.API_URL}/breeds`;
	}
}

const config = new AppConfig(process.env.REACT_APP_API_KEY);

export default config;
