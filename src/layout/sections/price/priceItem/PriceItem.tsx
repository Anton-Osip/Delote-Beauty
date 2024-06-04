import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { theme } from '../../../../styles/Theme'

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

const Item = styled.li`
	padding-bottom: 20px;
	padding-top: 40px;
	border-bottom: 1px solid ${theme.colors.font};
`
const Title = styled.h5`
	font-family: 'Cormorant Garamond';
	font-size: 27px;
	font-weight: 700;
	line-height: 130%;
`
const Coast = styled.span`
	font-family: 'Cormorant Garamond';
	font-size: 27px;
	font-weight: 700;
	line-height: 130%;
`
const Text = styled.p`
	font-family: 'Cormorant Garamond';
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
`
