import styled from 'styled-components'
import { PriceItem } from '../priceItem/PriceItem'

export function PriceList() {
	return (
		<List>
			<PriceItem />
			<PriceItem />
			<PriceItem />
			<PriceItem />
		</List>
	)
}

const List = styled.ul`
	max-width: 636px;
	width: 100%;
`
