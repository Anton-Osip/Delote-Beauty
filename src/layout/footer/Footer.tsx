import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Contact } from '../../components/contact/Contact'
import { Icon } from '../../components/icon/Icon'
import { OperatingMode } from '../../components/operatingMode/OperatingMode'

export function Footer() {
	return (
		<StyledFooter>
			<FlexWrapper justify='space-between' align='flex-start'>
				<Icon idIcon='logoIcon' width='60' height='60' viewBox='0 0 60 60' />
				<Contact />
				<OperatingMode />
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

const Copyright = styled.p`
	text-align: center;
`
