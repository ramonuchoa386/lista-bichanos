import { useState, useEffect } from 'react';
import config from '../../utils/config';
import { IBreed } from '../../utils/interfaces/api-response.interfaces';

const useFetchBreedDetails = (id: string) => {
	const { API_KEY, GET_BREEDS } = config;
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<IBreed>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		setLoading(true);

		fetch(`${GET_BREEDS}/${id}`, {
			method: 'GET',
			headers: new Headers({
				'x-api-key': API_KEY,
			}),
			mode: 'cors',
			cache: 'default',
		})
			.then((res) => res.json())
			.then((res: IBreed) => {
				setData(res);
			})
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, [id]);

	return { loading, data, error };
};

export default useFetchBreedDetails;
