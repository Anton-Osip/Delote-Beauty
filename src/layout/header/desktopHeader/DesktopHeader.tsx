import { useState } from 'react'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Burger } from '../../../components/burger/Burger'
import { Icon } from '../../../components/icon/Icon'
import { Logo } from '../../../components/logo/Logo'
import { Menu } from '../../../components/menu/Menu'
import { Sidebar } from '../../sections/sidebar/Sidebar'
import { S } from './DesktopHeader_styles'

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

export const DesktopHeader: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<S.DesktopHeader>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<Icon
						idIcon='instagramIcon'
						width='26'
						height='26'
						viewBox='0 0 26 26'
					/>
					<Menu navItems={LeftNav} />
					<Logo />
					<Menu navItems={RightNav} />
					<Burger isOpen={isOpen} setIsOpen={setIsOpen} />
				</FlexWrapper>
			</Container>
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
		</S.DesktopHeader>
	)
}
