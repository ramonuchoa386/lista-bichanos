interface IWeightIntel {
	imperial: string;
	metric: string;
}

interface IImageIntel {
	id: string;
	width: number;
	height: number;
	url: string;
}

interface IBreedBase {
	adaptability: number;
	affection_level: number;
	alt_names: string;
	child_friendly: number;
	country_code: string;
	country_codes: string;
	description: string;
	dog_friendly: number;
	energy_level: number;
	experimental: number;
	grooming: number;
	hairless: number;
	health_issues: number;
	hypoallergenic: number;
	id: string;
	indoor: number;
	intelligence: number;
	life_span: string;
	name: string;
	natural: number;
	origin: string;
	rare: number;
	reference_image_id: string;
	rex: number;
	shedding_level: number;
	short_legs: number;
	social_needs: number;
	stranger_friendly: number;
	suppressed_tail: number;
	temperament: string;
	vocalisation: number;
	weight: IWeightIntel;
	wikipedia_url: string;
}

interface IImageBreedDetail extends IBreedBase {
	lap: number;
}

export interface IBreed extends IBreedBase {
	vetstreet_url: string;
}

export interface ICat extends IBreed {
	cfa_url: string;
	image: IImageIntel;
	lap: number;
	vcahospitals_url: string;
}

export type IApiResponse = Array<ICat>;

export interface IImageResponse {
	id: string;
	url: string;
	breeds: IImageBreedDetail[];
	width: number;
	height: number;
}
