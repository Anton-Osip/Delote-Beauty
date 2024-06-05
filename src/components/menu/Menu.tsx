import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { INavItem } from '../../layout/header/Header'
import { theme } from '../../styles/Theme'
interface IMenuProps {
	navItems: INavItem[]
	modalIsOpen?: boolean
	setModalIsOpen?: (isOpen: boolean) => void
}

export function Menu(props: IMenuProps) {
	return (
		<StyledMenu modalIsOpen={props.modalIsOpen}>
			<ul>
				{props.navItems.map((item: INavItem) => (
					<li
						key={item.id}
						onClick={() => {
							if (props.setModalIsOpen) {
								props.setModalIsOpen(!props.modalIsOpen)
							}
						}}
					>
						<NavLink to={item.link}>{item.text}</NavLink>
					</li>
				))}
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav<{ modalIsOpen?: boolean }>`
	ul {
		display: flex;
		gap: 30px;
	}

	a {
		font-family: 'Cormorant Garamond';
		font-size: 18px;
		font-weight: 600;
		line-height: 130%;
	}
	a.active {
		color: ${theme.colors.borderColor};
		position: relative;
		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			bottom: -4px;
			left: 0;
			right: 0;
			height: 2px;
			background-color: ${theme.colors.borderColor};
		}
	}

	@media ${theme.media.tablet} {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${theme.colors.backgroundColor};

		ul {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
		a {
			font-size: 32px;
		}
	}
	${props =>
		props.modalIsOpen &&
		css<{ modalIsOpen?: boolean }>`
			left: 100% !important;
		`}
`
