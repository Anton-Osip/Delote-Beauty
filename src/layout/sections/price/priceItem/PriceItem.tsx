import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'

export function PriceItem() {
	return (
		<Item>
			<FlexWrapper justify='space-between' align='center'>
				<Title>Женская укладк</Title>
				<Coast>1 000 ₽ </Coast>
			</FlexWrapper>

			<Text>+ обработка кончинков волос</Text>
		</Item>
	)
}

const Item = styled.li``
const Title = styled.h5``
const Coast = styled.span``
const Text = styled.p``
