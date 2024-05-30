import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type CosmeticsItemPropsType = {
	id: string
	icon: string
	width: string
	height: string
	viewBox: string
}

export function CosmeticsItem(props: { item: CosmeticsItemPropsType }) {
	return (
		<StyledCosmeticsItem>
			<Icon
				idIcon={props.item.icon}
				width={props.item.width}
				height={props.item.height}
				viewBox={props.item.viewBox}
			/>
		</StyledCosmeticsItem>
	)
}

const StyledCosmeticsItem = styled.div`
	width: 22%;
	background-color: #feefa4;
	margin: 10px;
`
