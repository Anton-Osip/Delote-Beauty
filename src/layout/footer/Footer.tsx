import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Icon } from '../../components/icon/Icon'

export function Footer() {
	return (
		<StyledFooter>
			<FlexWrapper justify='space-between' align='flex-start'>
				<Icon idIcon='logoIcon' width='60' height='60' viewBox='0 0 60 60' />
				<Section>
					<Title>Контакты</Title>
					<Link href='tel:+78121234567'>+7 (812) 123-45-67</Link>
					<Link href='tel:+79111234567'>+7 (911) 123-45-67</Link>
					<Text>Новоостровский проспект, дом 36 лит. С</Text>
				</Section>
				<Section>
					<Title>Режим работы</Title>
					<Text>C 10:00 до 21:00 (Пн-Пт)</Text>
					<Text>С 11:00 до 20:00 (Сб-Вс)</Text>
				</Section>
				<Section>
					<Title>Мы в Instagram</Title>
					<Icon
						idIcon='instagramIcon'
						width='36'
						height='36'
						viewBox='0 0 36 36'
					/>
				</Section>
			</FlexWrapper>
			<Copyright>Copyright © 2017 - 2022</Copyright>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	min-height: 30vh;
	background-color: #f9c79b;
`

const Section = styled.div``
const Title = styled.h5``
const Link = styled.a`
	display: block;
`

const Text = styled.span`
	display: block;
`

const Copyright = styled.p`
	text-align: center;
`
