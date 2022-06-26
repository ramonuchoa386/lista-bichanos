/* eslint-disable */

import * as React from 'react';
import * as StyledHeadings from './styles';

interface IHeading {
	type: keyof typeof StyledHeadings;
	children: React.ReactNode;
}

function Heading(props: IHeading) {
	const { type, children } = props;

	const Component = StyledHeadings[type];

	return <Component {...props}>{children}</Component>;
}

export default Heading;
