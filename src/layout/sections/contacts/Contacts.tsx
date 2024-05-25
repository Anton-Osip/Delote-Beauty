import styled from 'styled-components'
import map from '../../../assets/images//map.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Contact } from '../../../components/contact/Contact'
import { OperatingMode } from '../../../components/operatingMode/OperatingMode'

export function Contacts() {
	return (
		<StyledContacts>
			<SectionTitle>Контакты</SectionTitle>
			<Image src={map} alt='map' />
			<FlexWrapper align='flex-start' justify='space-between'>
				<Contact />
				<OperatingMode />
				<Contact />
				<OperatingMode />
			</FlexWrapper>
		</StyledContacts>
	)
}

const StyledContacts = styled.section`
	min-height: 100vh;
	background-color: #9cf5fe;
`

const Image = styled.img`
	width: 100%;
`
