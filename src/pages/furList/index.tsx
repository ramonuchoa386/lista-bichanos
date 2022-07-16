import * as React from 'react';
import { SearchBox } from '../../components/organisms';
import { DefaultTemplate } from '../../components/templates';

function FurListPage() {
	return (
		<DefaultTemplate title="Lista de Bichanos">
			<SearchBox />
		</DefaultTemplate>
	);
}

export default FurListPage;
