import styled from 'styled-components'

type ServicesItemPropsType = { id: string; src: string; text: string }
export function ServicesItem(props: { item: ServicesItemPropsType }) {
	return (
		<StyledServicesItem>
			<Image src={props.item.src} alt={props.item.text} />
			<Text>{props.item.text}</Text>
		</StyledServicesItem>
	)
}

const StyledServicesItem = styled.div`
	width: 30%;
	background-color: #f9a4a4;
	margin: 10px;
`
const Image = styled.img`
	width: 100%;
`
const Text = styled.h3``
