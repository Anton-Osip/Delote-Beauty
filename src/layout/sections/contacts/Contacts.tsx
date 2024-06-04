import styled from 'styled-components'
import map from '../../../assets/images//map.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Contact } from '../../../components/contact/Contact'
import { OperatingMode } from '../../../components/operatingMode/OperatingMode'

export function Contacts() {
	return (
		<StyledContacts>
			<Container>
				<SectionTitle>Контакты</SectionTitle>
				<Image src={map} alt='map' />
				<FlexWrapper align='flex-start' justify='space-between'>
					<Contact />
					<OperatingMode />
					<Contact />
					<OperatingMode />
				</FlexWrapper>
			</Container>
		</StyledContacts>
	)
}

const StyledContacts = styled.section`
	padding: 180px 0 100px;
`

const Image = styled.img`
	width: 100%;
	margin-bottom: 80px;
`
