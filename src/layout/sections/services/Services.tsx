import styled from 'styled-components'
import services1 from '../../../assets/images/services/services-1.jpg'
import services2 from '../../../assets/images/services/services-2.jpg'
import services3 from '../../../assets/images/services/services-3.jpg'
import services4 from '../../../assets/images/services/services-4.jpg'
import services5 from '../../../assets/images/services/services-5.jpg'
import services6 from '../../../assets/images/services/services-6.jpg'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { ServicesItem } from './servicesItem/ServicesItem'
const data = [
	{ id: 'services6', src: services6, text: 'Парикмахерские услуги' },
	{ id: 'services4', src: services4, text: 'Маникюр' },
	{ id: 'services2', src: services2, text: 'Педикюр' },
	{ id: 'services5', src: services5, text: 'Косметология' },
	{ id: 'services3', src: services3, text: 'Эстетист по телу' },
	{ id: 'services1', src: services1, text: 'Визаж' },
]
export function Services() {
	return (
		<StyledServices>
			<Container>
				<ServicesContainer>
					{data.map(item => (
						<ServicesItem item={item} key={item.id} />
					))}
				</ServicesContainer>
			</Container>
		</StyledServices>
	)
}

const StyledServices = styled.section``
const ServicesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 60px;

	@media ${theme.media.tablet} {
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
	@media ${theme.media.mobile} {
		grid-template-columns: repeat(1, 1fr);
		gap: 15px;
	}
`
