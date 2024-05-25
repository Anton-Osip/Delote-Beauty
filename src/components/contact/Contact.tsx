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
const Title = styled.h5``
const Link = styled.a`
	display: block;
`

const Text = styled.span`
	display: block;
`
