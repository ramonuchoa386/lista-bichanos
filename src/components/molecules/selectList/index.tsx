import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles';
import useFetchBreeds from '../../../hooks/useFetchBreeds';
import { ISelectOptions } from '../../../utils/interfaces/custom.interfaces';
import BreedIdContext from '../../../context/breedId';

const SelectList = () => {
	const { setId } = useContext(BreedIdContext);
	const { loading, data, error } = useFetchBreeds();
	const [options, setOptions] = useState<ISelectOptions[]>([]);
	const [selected, setSelected] = useState<string>('');

	useEffect(() => {
		if (!loading && data !== undefined && error === undefined) {
			data.forEach((item) => {
				setOptions((currentList: ISelectOptions[]) => [
					...currentList,
					{ name: item.name, id: item.id },
				]);
			});
		}
	}, [loading, data, error]);

	const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const id = e.currentTarget.value;

		setId(id);
		setSelected(id);
	};

	return (
		<S.SelectLabel htmlFor="selectBichano">
			Selecione o bichano:
			<S.SelectBox
				name="selectBichano"
				onChange={selectHandler}
				value={selected}>
				<option value="">Escolha o nome</option>
				{options.map((option) => {
					return (
						<option key={`option-${option.id}`} value={option.id}>
							{option.name}
						</option>
					);
				})}
			</S.SelectBox>
		</S.SelectLabel>
	);
};

export default SelectList;
