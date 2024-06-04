import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from './slider/Slider'

export function About() {
	return (
		<StyledAbout>
			<FlexWrapper direction='column' align='center'>
				<Icon idIcon='quoteIcon' width='80' height='64' viewBox='0 0 80 64' />
				<Slider />
			</FlexWrapper>
		</StyledAbout>
	)
}

const StyledAbout = styled.section`
	padding: 120px 0 95px;
`
