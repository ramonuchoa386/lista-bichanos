import { useState, useEffect } from 'react';
import config from '../../utils/config';
import { IApiResponse } from '../../utils/interfaces/api-response.interfaces';

const useFetchBreeds = () => {
	const { API_KEY, GET_BREEDS } = config;
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<IApiResponse>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		setLoading(true);

		fetch(GET_BREEDS, {
			method: 'GET',
			headers: new Headers({
				'x-api-key': API_KEY,
			}),
			mode: 'cors',
			cache: 'default',
		})
			.then((res) => res.json())
			.then((res: IApiResponse) => {
				setData(res);
			})
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, []);

	return { loading, data, error };
};

export default useFetchBreeds;
