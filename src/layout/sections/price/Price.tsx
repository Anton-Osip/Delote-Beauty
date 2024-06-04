import styled from 'styled-components'
import img from '../../../assets/images/prices/price.jpg'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { PriceList } from './priceList/PriceList'

export default function Price() {
	return (
		<StyledPrice>
			<Container>
				<SectionTitle>Цены на услуги</SectionTitle>
				<PriceWrapper>
					<Image src={img} alt='price' />
					<PriceList mode='auto' />

					<PriceList />
					<Image src={img} alt='price' />

					<Image src={img} alt='price' />
					<PriceList mode='auto' />
				</PriceWrapper>
			</Container>
		</StyledPrice>
	)
}

const StyledPrice = styled.section`
	padding: 180px 0 100px;
`
const PriceWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 24px;
	row-gap: 80px;
`

const Image = styled.img`
	aspect-ratio: 636/536;
`
