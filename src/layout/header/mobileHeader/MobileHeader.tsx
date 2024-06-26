import { useState } from 'react'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Burger } from '../../../components/burger/Burger'
import { Icon } from '../../../components/icon/Icon'
import { Logo } from '../../../components/logo/Logo'
import { Menu } from '../../../components/menu/Menu'
import { S } from './MobileHeader_Styles'

export interface INavItem {
	id: string
	link: string
	text: string
}

const NavDate: INavItem[] = [
	{ id: 'LeftNav1', link: '/Delote-Beauty/home', text: 'Главная' },
	{ id: 'LeftNav2', link: '/Delote-Beauty/team', text: 'Мастера' },
	{ id: 'LeftNav3', link: '/Delote-Beauty/error', text: 'Косметика' },
	{ id: 'RightNav1', link: '/Delote-Beauty/price', text: 'Акции' },
	{ id: 'RightNav2', link: '/Delote-Beauty/error', text: 'Отзывы' },
	{ id: 'RightNav3', link: '/Delote-Beauty/contacts', text: 'Контакты' },
]

export const MobileHeader: React.FC = () => {
	const [modalIsOpen, setModalIsOpen] = useState(true)

	return (
		<S.MobileHeader>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<S.Link>
						<Icon
							idIcon='instagramIcon'
							width='26'
							height='26'
							viewBox='0 0 26 26'
						/>
					</S.Link>
					<Menu
						navItems={NavDate}
						modalIsOpen={modalIsOpen}
						setModalIsOpen={setModalIsOpen}
					/>
					<Logo />
					<Burger isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
				</FlexWrapper>
			</Container>
		</S.MobileHeader>
	)
}
