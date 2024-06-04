import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export function Burger() {
	return (
		<StyledBurger>
			<span></span>
		</StyledBurger>
	)
}

const StyledBurger = styled.button`
	width: 60px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	span {
		display: inline-block;
		width: 40px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: relative;
	}

	span::after,
	span::before {
		content: '';
		display: inline-block;
		width: 40px;
		height: 2px;
		background-color: ${theme.colors.font};
		position: absolute;
	}

	span::before {
		top: 10px;
	}
	span::after {
		bottom: 10px;
	}
`
