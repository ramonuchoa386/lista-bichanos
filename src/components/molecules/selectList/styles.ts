import styled from 'styled-components';

export const SelectLabel = styled.label`
	display: flex;
	border-bottom: 4px dotted ${(props) => props.theme.colors.grey};
	padding-bottom: 30px;
	margin-bottom: 30px;
`;

export const SelectBox = styled.select`
	margin-left: 8px;
`;
