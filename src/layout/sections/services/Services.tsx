import { Slide } from 'react-awesome-reveal'
import services1 from '../../../assets/images/services/services-1.jpg'
import services2 from '../../../assets/images/services/services-2.jpg'
import services3 from '../../../assets/images/services/services-3.jpg'
import services4 from '../../../assets/images/services/services-4.jpg'
import services5 from '../../../assets/images/services/services-5.jpg'
import services6 from '../../../assets/images/services/services-6.jpg'
import { Container } from '../../../components/Container'
import { S } from './Services_Styles'
import { ServicesItem } from './servicesItem/ServicesItem'
const data = [
	{ id: 'services6', src: services6, text: 'Парикмахерские услуги' },
	{ id: 'services4', src: services4, text: 'Маникюр' },
	{ id: 'services2', src: services2, text: 'Педикюр' },
	{ id: 'services5', src: services5, text: 'Косметология' },
	{ id: 'services3', src: services3, text: 'Эстетист по телу' },
	{ id: 'services1', src: services1, text: 'Визаж' },
]
export const Services: React.FC = () => {
	return (
		<S.Services>
			<Container>
				<S.ServicesContainer>
					{data.map(item => (
						<Slide key={item.id}>
							<ServicesItem item={item} />
						</Slide>
					))}
				</S.ServicesContainer>
			</Container>
		</S.Services>
	)
}
