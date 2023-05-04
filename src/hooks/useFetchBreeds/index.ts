import { useState, useEffect } from 'react';
import config from '../../utils/config';
import {
	IApiResponse,
	IBreed,
} from '../../utils/interfaces/api-response.interfaces';

const useFetchBreeds = (id?: string) => {
	const { API_KEY, GET_BREEDS } = config;
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<IApiResponse | IBreed>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		setLoading(true);
		const URL = id !== undefined ? `${GET_BREEDS}/${id}` : GET_BREEDS;

		fetch(URL, {
			method: 'GET',
			headers: new Headers({
				'x-api-key': API_KEY,
			}),
			mode: 'cors',
			cache: 'default',
		})
			.then((res) => res.json())
			.then((res: IApiResponse | IBreed) => {
				setData(res);
			})
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, [id]);

	return { loading, data, error };
};

export default useFetchBreeds;
