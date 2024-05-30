import styled from 'styled-components'

export function Main() {
	return (
		<StyledMain>
			<MainTitle>
				Салон красоты <br />
				«DELOTE BEAUTY»
				<br /> на Крестовском
			</MainTitle>
			<ScrollDown>Прокрутите вниз</ScrollDown>
		</StyledMain>
	)
}

const StyledMain = styled.section`
	background-color: #a2ebff;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const MainTitle = styled.h1`
	text-align: center;
	flex-grow: 2;
	display: flex;
	align-items: center;
`

const ScrollDown = styled.button``
