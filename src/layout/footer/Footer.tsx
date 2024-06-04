import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Contact } from '../../components/contact/Contact'
import { Icon } from '../../components/icon/Icon'
import { OperatingMode } from '../../components/operatingMode/OperatingMode'
import { theme } from '../../styles/Theme'

export function Footer() {
	return (
		<StyledFooter>
			<Container>
				<FlexWrapper justify='space-between' align='flex-start'>
					<NavLink to={'/home'}>
						<Icon
							idIcon='logoIcon'
							width='60'
							height='60'
							viewBox='0 0 60 60'
						/>
					</NavLink>
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
			</Container>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	${FlexWrapper} {
		padding: 80px 0;
		border-top: 1px solid ${theme.colors.font};
		border-bottom: 1px solid ${theme.colors.font};
	}
`

const Section = styled.div``
const Title = styled.h5`
	font-size: 24px;
	font-weight: 700;
	line-height: 120%;
	margin-bottom: 25px;
`

const Copyright = styled.p`
	text-align: center;
	padding: 30px 0;
	font-family: Cormorant Garamond;
	font-size: 18px;
	font-weight: 700;
	line-height: 140%;
`
