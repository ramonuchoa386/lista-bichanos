/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
	FunctionComponent,
	PropsWithChildren,
	createContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import useFetchBreeds from '../../hooks/useFetchBreeds';
import useFetchImage from '../../hooks/useFetchImage';

interface IBreedIdContextProps {
	breedId?: string;
	breedName?: string;
	breedDesc?: string;
	imgUrl?: string;
	affectionLevel?: number;
	adapt?: number;
	childFriendly?: number;
	dogFriendly?: number;
	// eslint-disable-next-line no-unused-vars
	setId: (id: string) => void;
}

const INITIAL_STATE: IBreedIdContextProps = {
	breedId: undefined,
	breedName: undefined,
	breedDesc: undefined,
	imgUrl: undefined,
	affectionLevel: undefined,
	adapt: undefined,
	childFriendly: undefined,
	dogFriendly: undefined,
	setId: () => {},
};

const BreedIdContext = createContext<IBreedIdContextProps>(INITIAL_STATE);

const BreedIdContextProvider: FunctionComponent<PropsWithChildren> = (
	props,
) => {
	const { children } = props;

	const [breedId, setBreedId] = useState<string>();
	const [breedName, setBreedName] = useState<string>();
	const [breedDesc, setBreedDesc] = useState<string>();
	const [imgUrl, setImgUrl] = useState<string>();
	const [imgId, setImgId] = useState<string>();
	const [affectionLevel, setAffectionLevel] = useState<number>();
	const [adapt, setAdapt] = useState<number>();
	const [childFriendly, setChildFriendly] = useState<number>();
	const [dogFriendly, setDogFriendly] = useState<number>();
	const { data } = useFetchBreeds(breedId);
	const { data: imgData } = useFetchImage(imgId);

	const provider = useMemo(
		() => ({
			breedId,
			breedName,
			breedDesc,
			imgUrl,
			affectionLevel,
			adapt,
			childFriendly,
			dogFriendly,
			setId: (id: string) => {
				setBreedId(id);
			},
		}),
		[
			breedId,
			breedName,
			breedDesc,
			imgUrl,
			affectionLevel,
			adapt,
			childFriendly,
			dogFriendly,
		],
	);

	useEffect(() => {
		if (data !== undefined && !Array.isArray(data)) {
			const {
				name,
				description,
				reference_image_id,
				affection_level,
				adaptability,
				child_friendly,
				dog_friendly,
			} = data;
			setBreedName(name);
			setBreedDesc(description);
			setAffectionLevel(affection_level);
			setAdapt(adaptability);
			setChildFriendly(child_friendly);
			setDogFriendly(dog_friendly);

			setImgId(reference_image_id);
		}
	}, [data]);

	useEffect(() => {
		if (imgData) setImgUrl(imgData.url);
	}, [imgData]);

	return (
		<BreedIdContext.Provider value={provider}>
			{children}
		</BreedIdContext.Provider>
	);
};

export { BreedIdContextProvider };
export default BreedIdContext;
