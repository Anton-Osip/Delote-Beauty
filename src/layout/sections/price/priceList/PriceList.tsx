import styled from 'styled-components'
import { PriceItem } from '../priceItem/PriceItem'
type PriceListType = { mode?: string }
export function PriceList(props: PriceListType) {
	return (
		<List mode={props.mode}>
			<PriceItem />
			<PriceItem />
			<PriceItem />
			<PriceItem />
		</List>
	)
}

const List = styled.ul<PriceListType>`
	width: 100%;
	max-width: 526px;
	margin-left: ${props => props.mode || '0px'};
`
