import React, { useContext } from 'react';
import * as S from './styles';
import SelectList from '../../molecules/selectList';
import BreedIdContext from '../../../context/breedId';

function SearchBox() {
	const { breedId } = useContext(BreedIdContext);

	return (
		<S.SearchResultsWrapper>
			<SelectList />
			{/* <Text>
        {results.length > 0 &&
          results.length +
            (results.length > 1 ? " results found" : " result found")}
      </Text> */}

			{!breedId && <p style={{ textAlign: 'center' }}>Nenhum selecionado</p>}

			{breedId && <S.Result />}
			{/* {results.length > 0 && (
        <S.LoadMoreButton>Load more</S.LoadMoreButton>
      )} */}
		</S.SearchResultsWrapper>
	);
}

export default SearchBox;
