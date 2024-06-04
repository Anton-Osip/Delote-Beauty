import styled from 'styled-components'

export function OperatingMode() {
	return (
		<StyledOperatingMode>
			<Title>Режим работы</Title>
			<Text>C 10:00 до 21:00 (Пн-Пт)</Text>
			<Text>С 11:00 до 20:00 (Сб-Вс)</Text>
		</StyledOperatingMode>
	)
}

const StyledOperatingMode = styled.div``
const Title = styled.h5`
	font-size: 24px;
	font-weight: 700;
	line-height: 120%;
	margin-bottom: 25px;
`
const Text = styled.span`
	display: block;
	font-family: 'Cormorant Garamond';
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
	margin-bottom: 15px;
`
