/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
	FunctionComponent,
	PropsWithChildren,
	createContext,
	useMemo,
	useState,
} from 'react';

interface IBreedIdContextProps {
	breedId?: string;
	// eslint-disable-next-line no-unused-vars
	setId: (id: string) => void;
}

const INITIAL_STATE: IBreedIdContextProps = {
	breedId: undefined,
	setId: () => {},
};

const BreedIdContext = createContext<IBreedIdContextProps>(INITIAL_STATE);

const BreedIdContextProvider: FunctionComponent<PropsWithChildren> = (
	props,
) => {
	const { children } = props;
	const [breedId, setBreedId] = useState<string>();

	const provider = useMemo(
		() => ({
			breedId,
			setId: (id: string) => {
				setBreedId(id);
			},
		}),
		[breedId],
	);

	return (
		<BreedIdContext.Provider value={provider}>
			{children}
		</BreedIdContext.Provider>
	);
};

export { BreedIdContextProvider };
export default BreedIdContext;
