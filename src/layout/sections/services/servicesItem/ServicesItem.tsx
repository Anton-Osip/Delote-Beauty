import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

type ServicesItemPropsType = { id: string; src: string; text: string }
export function ServicesItem(props: { item: ServicesItemPropsType }) {
	return (
		<StyledServicesItem>
			<ImageWrapper>
				<Image src={props.item.src} alt={props.item.text} />
			</ImageWrapper>
			<Text>{props.item.text}</Text>
		</StyledServicesItem>
	)
}

const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
	&:after {
		content: '';
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.2);
	}
	&::before {
		content: '';
		display: inline-block;
		position: absolute;
		width: 100%;
		height: 100%;
		border: 1px solid ${theme.colors.borderColor};
		top: -20px;
		right: -20px;
		z-index: -1;
	}
`
const StyledServicesItem = styled.div`
	padding-top: 20px;
	padding-right: 20px;
	cursor: pointer;

	&:hover {
		${ImageWrapper}:after {
			background: transparent;
		}
	}
`
const Image = styled.img`
	width: 100%;
	height: 100%;
`
const Text = styled.h3`
	font-size: 30px;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 0%;
	margin-top: 30px;
`
