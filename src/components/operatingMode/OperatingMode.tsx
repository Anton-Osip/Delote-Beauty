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
const Title = styled.h5``
const Text = styled.span`
	display: block;
`
