import { Fade, Slide } from 'react-awesome-reveal'
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
				<Slide>
					<S.Image src={map} alt='map' />
				</Slide>
				<FlexWrapper
					align='flex-start'
					justify='space-around'
					wrap='wrap'
					gap='20'
				>
					<Fade>
						<Contact />
					</Fade>
					<Fade>
						<OperatingMode />
					</Fade>
					<Fade>
						<Contact />
					</Fade>
					<Fade>
						<OperatingMode />
					</Fade>
				</FlexWrapper>
			</Container>
		</S.Contacts>
	)
}
