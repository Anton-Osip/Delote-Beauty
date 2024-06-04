import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { INavItem } from '../../layout/header/Header'
import { theme } from '../../styles/Theme'
interface IMenuProps {
	navItems: INavItem[]
}
export function Menu(props: IMenuProps) {
	return (
		<StyledMenu>
			<ul>
				{props.navItems.map((item: INavItem) => (
					<li key={item.id}>
						<NavLink to={item.link}>{item.text}</NavLink>
					</li>
				))}
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav`
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
`
