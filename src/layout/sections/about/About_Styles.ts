import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

const About = styled.section`
	padding: 120px 0 95px;

	@media ${theme.media.tablet} {
		padding: 80px 0 65px;
	}
	@media ${theme.media.mobile} {
		padding: 50px 0 30px;
	}
`

const Slider = styled.div`
	max-width: 856px;
	width: 100%;

	margin-top: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${theme.media.tablet} {
		margin-top: 20px;
	}
`
const Slide = styled.div`
	text-align: center;
`
const Text = styled.p`
	${font({
		family: 'Cormorant Garamond',
		weight: 700,
		lineHeight: 1.3,
		Fmax: 27,
		Fmin: 20,
	})}
	letter-spacing: 0%;
	text-align: center;

	& + p {
		margin-top: 30px;
		@media ${theme.media.tablet} {
			margin-top: 15px;
		}
	}
`

export const S = { About, Slider, Slide, Text }