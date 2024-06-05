import styled from 'styled-components'
import img from '../../../assets/images/prices/price.jpg'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { theme } from '../../../styles/Theme'
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
	@media ${theme.media.tablet} {
		padding: 180px 0 65px;
	}
	@media ${theme.media.mobile} {
		padding: 180px 0 30px;
	}
`
const PriceWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 24px;
	row-gap: 80px;

	@media screen and (max-width: 1168px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

const Image = styled.img`
	width: 100%;
	aspect-ratio: 636/536;
`
