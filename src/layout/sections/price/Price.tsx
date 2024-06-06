import img from '../../../assets/images/prices/price.jpg'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { S } from './Price_Styles'
import { PriceList } from './priceList/PriceList'

export const Price: React.FC = () => {
	return (
		<S.Price>
			<Container>
				<SectionTitle>Цены на услуги</SectionTitle>
				<S.PriceWrapper>
					<S.Image src={img} alt='price' />
					<PriceList mode='auto' />

					<PriceList />
					<S.Image src={img} alt='price' />

					<S.Image src={img} alt='price' />
					<PriceList mode='auto' />
				</S.PriceWrapper>
			</Container>
		</S.Price>
	)
}
