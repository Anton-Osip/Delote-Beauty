import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { CosmeticsItem } from './cosmeticsItem/CosmeticsItem'
const data = [
	{
		id: 'kevinLogo',
		icon: 'kevinLogo',
		width: '69',
		height: '108',
		viewBox: '0 0 69 108',
	},
	{
		id: 'oribeLogo',
		icon: 'oribeLogo',
		width: '90',
		height: '120',
		viewBox: '0 0 90 120',
	},
	{
		id: 'alternaLogo',
		icon: 'alternaLogo',
		width: '190',
		height: '98',
		viewBox: '0 0 190 98',
	},
	{
		id: 'aldoLogo',
		icon: 'aldoLogo',
		width: '110',
		height: '108',
		viewBox: '0 0 110 108',
	},
]
export function Cosmetics() {
	return (
		<StyledCosmetics>
			<FlexWrapper wrap='wrap' justify='space-between'>
				{data.map(item => (
					<CosmeticsItem item={item} key={item.id} />
				))}
			</FlexWrapper>
		</StyledCosmetics>
	)
}
const StyledCosmetics = styled.section`
	min-height: 30vh;
	background-color: #a4f9ec;
`
