import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { S } from '../About_Styles'
const Slide: React.FC = () => {
	return (
		<S.Slide>
			<S.Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
				vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
				risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
				tristique. Viverra augue lorem ut quisque quam tortor, malesuada
				iaculis.
			</S.Text>
			<S.Text>
				Et elementum at nulla venenatis, faucibus integer. Auctor neque eros,
				viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit
				imperdiet sapien fringilla vestibulum sit fames.
			</S.Text>
		</S.Slide>
	)
}
const SlideItems = [<Slide />, <Slide />, <Slide />]

export const Slider: React.FC = () => {
	return (
		<S.Slider>
			<AliceCarousel mouseTracking items={SlideItems} disableButtonsControls />
		</S.Slider>
	)
}
