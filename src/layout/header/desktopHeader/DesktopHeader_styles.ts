import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

const DesktopHeader = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 5;
	${Container} {
		border-bottom: 1px solid ${theme.colors.font};
		padding: 40px 15px 30px 15px;
	}
`

export const S = { DesktopHeader }
