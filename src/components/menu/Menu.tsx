import styled from 'styled-components'
import { INavItem } from '../../layout/header/Header'
interface IMenuProps {
	navItems: INavItem[]
}
export function Menu(props: IMenuProps) {
	return (
		<StyledMenu>
			<ul>
				{props.navItems.map((item: INavItem) => (
					<li key={item.id}>
						<a href={item.link}>{item.text}</a>
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
`
