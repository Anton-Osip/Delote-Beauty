import styled from 'styled-components'
import map from '../../../assets/images//map.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Contact } from '../../../components/contact/Contact'
import { OperatingMode } from '../../../components/operatingMode/OperatingMode'
import { theme } from '../../../styles/Theme'

export function Contacts() {
	return (
		<StyledContacts>
			<Container>
				<SectionTitle>Контакты</SectionTitle>
				<Image src={map} alt='map' />
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
		</StyledContacts>
	)
}

const StyledContacts = styled.section`
	padding: 180px 0 100px;
	@media ${theme.media.tablet} {
		padding: 180px 0 65px;
	}
	@media ${theme.media.mobile} {
		padding: 180px 0 30px;
	}

	${FlexWrapper} {
		@media ${theme.media.tablet} {
			gap: 30px;
		}
		@media ${theme.media.mobile} {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
	}
`

const Image = styled.img`
	width: 100%;
	margin-bottom: 80px;
	@media ${theme.media.tablet} {
		margin-bottom: 60px;
	}
	@media ${theme.media.mobile} {
		margin-bottom: 40px;
	}
`
