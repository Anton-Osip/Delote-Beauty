import styled from 'styled-components'

export function Contact() {
	return (
		<StyledContacts>
			<Title>Контакты</Title>
			<Link href='tel:+78121234567'>+7 (812) 123-45-67</Link>
			<Link href='tel:+79111234567'>+7 (911) 123-45-67</Link>
			<Text>Новоостровский проспект, дом 36 лит. С</Text>
		</StyledContacts>
	)
}

const StyledContacts = styled.div``
const Title = styled.h5`
	font-size: 24px;
	font-weight: 700;
	line-height: 120%;
	margin-bottom: 25px;
`
const Link = styled.a`
	display: block;
	font-family: Cormorant Garamond;
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
	margin-bottom: 15px;
`

const Text = styled.span`
	display: block;
`
