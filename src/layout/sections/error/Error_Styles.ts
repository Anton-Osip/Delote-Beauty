import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { theme } from '../../../styles/Theme'

const Error = styled.section`
	padding: 180px 0 100px;
	@media ${theme.media.tablet} {
		padding: 180px 0 65px;
	}
	@media ${theme.media.mobile} {
		padding: 180px 0 30px;
	}

	${SectionTitle} {
		color: ${theme.colors.borderColor};
	}
`

const Image = styled.img`
	position: relative;
	z-index: 1;

	margin-bottom: 24px;
	width: 100%;
`
const Link = styled.a`
	font-family: 'Cormorant Garamond';
	display: inline-block;
	position: relative;
	font-size: 26px;
	font-weight: 700;
	line-height: 140%;
	&:after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		right: 0;
		display: inline-block;
		height: 2px;
		background-color: ${theme.colors.font};
	}
`

export const S = { Error, Image, Link }
