import styled from 'styled-components'

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
	max-width: 500px;
	border: 1px solid red;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Slide = styled.div`
	text-align: center;
`
const Text = styled.p``
