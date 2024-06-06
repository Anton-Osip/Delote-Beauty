import map from '../../../assets/images//map.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Contact } from '../../../components/contact/Contact'
import { OperatingMode } from '../../../components/operatingMode/OperatingMode'
import { S } from './Contacts_styles'

export const Contacts: React.FC = () => {
	return (
		<S.Contacts>
			<Container>
				<SectionTitle>Контакты</SectionTitle>
				<S.Image src={map} alt='map' />
				<FlexWrapper
					align='flex-start'
					justify='space-around'
					wrap='wrap'
					gap='20'
				>
					<Contact />
					<OperatingMode />
					<Contact />
					<OperatingMode />
				</FlexWrapper>
			</Container>
		</S.Contacts>
	)
}
