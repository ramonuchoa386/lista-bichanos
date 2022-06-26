import * as React from 'react';
import * as S from './styles';

function Navigation() {
	return (
		<S.Navigation>
			<S.Link to="/">
				<S.LinkIcon icon="pets" /> <S.LinkText>Breeds</S.LinkText>
			</S.Link>

			<S.Link to="/feedback">
				<S.LinkIcon icon="announcement" /> <S.LinkText>Feedback</S.LinkText>
			</S.Link>
		</S.Navigation>
	);
}

export default Navigation;
