import { NavLink } from 'react-router-dom'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Contact } from '../../components/contact/Contact'
import { Icon } from '../../components/icon/Icon'
import { OperatingMode } from '../../components/operatingMode/OperatingMode'
import { S } from './Footer_Styles'

export function Footer() {
	return (
		<S.Footer>
			<Container>
				<FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
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
					<S.Section>
						<S.Title>Мы в Instagram</S.Title>
						<Icon
							idIcon='instagramIcon'
							width='36'
							height='36'
							viewBox='0 0 36 36'
						/>
					</S.Section>
				</FlexWrapper>
				<S.Copyright>Copyright © 2017 - 2022</S.Copyright>
			</Container>
		</S.Footer>
	)
}
