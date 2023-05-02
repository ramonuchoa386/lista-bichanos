import React from 'react';
import { BreedIdContextProvider } from './breedId';

function GlobalContext(props: React.PropsWithChildren) {
	const { children } = props;

	return <BreedIdContextProvider>{children}</BreedIdContextProvider>;
}

export default GlobalContext;
