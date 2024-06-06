import { S } from './Contact_Styles'

export const Contact: React.FC = () => {
	return (
		<S.Contacts>
			<S.Title>Контакты</S.Title>
			<S.Link href='tel:+78121234567'>+7 (812) 123-45-67</S.Link>
			<S.Link href='tel:+79111234567'>+7 (911) 123-45-67</S.Link>
			<S.Text>Новоостровский проспект, дом 36 лит. С</S.Text>
		</S.Contacts>
	)
}
