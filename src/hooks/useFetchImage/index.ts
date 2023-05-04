import { useState, useEffect } from 'react';
import config from '../../utils/config';
import { IImageResponse } from '../../utils/interfaces/api-response.interfaces';

const useFetchImage = (id?: string) => {
	const { API_KEY, IMAGES_CONTEXT } = config;
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<IImageResponse>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		setLoading(true);

		fetch(`${IMAGES_CONTEXT}/${id || 'search'}`, {
			method: 'GET',
			headers: new Headers({
				'x-api-key': API_KEY,
			}),
			mode: 'cors',
			cache: 'default',
		})
			.then((res) => res.json())
			.then((res: IImageResponse) => {
				setData(res);
			})
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, [id]);

	return { loading, data, error };
};

export default useFetchImage;
