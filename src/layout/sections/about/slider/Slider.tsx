import styled from 'styled-components'
import { font } from '../../../../styles/Common'
import { theme } from '../../../../styles/Theme'

export function Slider() {
	return (
		<StyledSlider>
			<Slide>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
					vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
					risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
					tristique. Viverra augue lorem ut quisque quam tortor, malesuada
					iaculis.
				</Text>
				<Text>
					Et elementum at nulla venenatis, faucibus integer. Auctor neque eros,
					viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit
					imperdiet sapien fringilla vestibulum sit fames.
				</Text>
			</Slide>
		</StyledSlider>
	)
}

const StyledSlider = styled.div`
	max-width: 856px;
	width: 100%;

	margin-top: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${theme.media.tablet} {
		margin-top: 20px;
	}
`
const Slide = styled.div`
	text-align: center;
`
const Text = styled.p`
	${font({
		family: 'Cormorant Garamond',
		weight: 700,
		lineHeight: 1.3,
		Fmax: 27,
		Fmin: 20,
	})}
	letter-spacing: 0%;
	text-align: center;

	& + p {
		margin-top: 30px;
		@media ${theme.media.tablet} {
			margin-top: 15px;
		}
	}
`
