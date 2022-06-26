import * as React from 'react';
import { Sidebar, Header } from '../../organisms';
import { AppWrapper, Main } from './styles';

interface ITemplateProps {
	children: React.ReactNode;
	title?: string;
}

function DefaultTemplate({
	children,
	title = 'Lista Bichanos',
}: ITemplateProps) {
	return (
		<AppWrapper>
			<Sidebar />
			<Main>
				<Header pageTitle={title} />
				{children}
			</Main>
		</AppWrapper>
	);
}

export default DefaultTemplate;
