import styled from 'styled-components'
import img from '../../../assets/images/prices/price.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { PriceList } from './priceList/PriceList'

export default function Price() {
	return (
		<StyledPrice>
			<SectionTitle>Цены на услуги</SectionTitle>
			<FlexWrapper wrap='wrap' align='space-between' gap='24px'>
				<Image src={img} alt='price' />
				<PriceList />

				<PriceList />
				<Image src={img} alt='price' />

				<Image src={img} alt='price' />
				<PriceList />
			</FlexWrapper>
		</StyledPrice>
	)
}

const StyledPrice = styled.section`
	min-height: 100vh;
	background-color: #abffff;
`

const Image = styled.img`
	max-width: 636px;
`
