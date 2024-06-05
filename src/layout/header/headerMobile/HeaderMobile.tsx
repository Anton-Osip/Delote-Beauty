import { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Burger } from '../../../components/burger/Burger'
import { Icon } from '../../../components/icon/Icon'
import { Logo } from '../../../components/logo/Logo'
import { Menu } from '../../../components/menu/Menu'
import { theme } from '../../../styles/Theme'

export interface INavItem {
	id: string
	link: string
	text: string
}

const NavDate: INavItem[] = [
	{ id: 'LeftNav1', link: 'home', text: 'Главная' },
	{ id: 'LeftNav2', link: 'team', text: 'Мастера' },
	{ id: 'LeftNav3', link: 'error', text: 'Косметика' },
	{ id: 'RightNav1', link: 'price', text: 'Акции' },
	{ id: 'RightNav2', link: 'error', text: 'Отзывы' },
	{ id: 'RightNav3', link: 'contacts', text: 'Контакты' },
]

export function HeaderMobile() {
	const [modalIsOpen, setModalIsOpen] = useState(true)

	return (
		<StyledHeaderMobile>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<Icon
						idIcon='instagramIcon'
						width='26'
						height='26'
						viewBox='0 0 26 26'
					/>
					<Menu
						navItems={NavDate}
						modalIsOpen={modalIsOpen}
						setModalIsOpen={setModalIsOpen}
					/>
					<Logo />
					<Burger isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
				</FlexWrapper>
			</Container>
		</StyledHeaderMobile>
	)
}

const StyledHeaderMobile = styled.header`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 5;
	${Container} {
		border-bottom: 1px solid ${theme.colors.font};
		padding: 40px 15px 30px 15px;
	}

	@media ${theme.media.tablet} {
		display: block;
	}
`
