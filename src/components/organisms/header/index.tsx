import * as React from 'react';
import * as S from './styles';

interface IHeader {
	pageTitle: string;
}

function Header(props: IHeader) {
	const { pageTitle } = props;

	return (
		<S.Header>
			<S.Heading type="H2">{pageTitle}</S.Heading>
			<S.Profile />
		</S.Header>
	);
}

export default Header;
