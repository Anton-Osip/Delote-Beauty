import styled from 'styled-components'
import { Burger } from '../../components/burger/Burger'
import { Icon } from '../../components/icon/Icon'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

export interface INavItem {
	id: string
	link: string
	text: string
}

const LeftNav: INavItem[] = [
	{ id: 'LeftNav1', link: 'home', text: 'Главная' },
	{ id: 'LeftNav2', link: 'team', text: 'Мастера' },
	{ id: 'LeftNav3', link: 'error', text: 'Косметика' },
]
const RightNav: INavItem[] = [
	{ id: 'RightNav1', link: 'price', text: 'Акции' },
	{ id: 'RightNav2', link: 'error', text: 'Отзывы' },
	{ id: 'RightNav3', link: 'contacts', text: 'Контакты' },
]

export function Header() {
	return (
		<StyledHeader>
			<Icon idIcon='instagramIcon' width='26' height='26' viewBox='0 0 26 26' />
			<Menu navItems={LeftNav} />
			<Logo />
			<Menu navItems={RightNav} />
			<Burger />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: #94ffa1;
	display: flex;
	justify-content: space-between;
`
