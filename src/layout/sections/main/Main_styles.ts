import styled from 'styled-components'
import image from '../../../assets/images/baner2x.jpg'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

const Main = styled.div`
	background: rgba(0, 0, 0, 0.5) url(${image}) no-repeat center / cover;
	padding: 100px 0 2%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	background-blend-mode: multiply;
`
const MainTitle = styled.h1`
	text-align: center;
	${font({ weight: 700, lineHeight: 1.2, Fmax: 72, Fmin: 40 })}
`
const Text = styled.p`
	text-align: center;
	${font({ weight: 700, lineHeight: 1.2, Fmax: 72, Fmin: 40 })}
`
const ScrollDown = styled.button`
	font-family: 'Cormorant Garamond';
	display: inline-block;
	padding-left: 40px;
	position: relative;
	font-size: 18px;
	font-weight: 700;
	line-height: 140%;
	&:after {
		content: '';
		position: absolute;
		top: -5px;
		left: 0;
		display: inline-block;
		width: 20px;
		height: 30px;
		border: 1px solid ${theme.colors.font};
		border-radius: 8px;
	}
	&::before {
		content: '';
		position: absolute;
		top: 0px;
		left: 8px;
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: ${theme.colors.font};
	}
`
const TitleWrapper = styled.div`
	flex-grow: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const S = { Main, MainTitle, ScrollDown, Text, TitleWrapper }
