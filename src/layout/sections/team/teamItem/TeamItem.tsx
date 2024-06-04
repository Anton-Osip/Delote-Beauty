import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

type TeamItemPropsType = {
	id: string
	src: string
	name: string
	text: string
}

export function TeamItem(props: { item: TeamItemPropsType }) {
	return (
		<StyledTeamItem>
			<ImageWrapper>
				<Image src={props.item.src} alt={props.item.name} />
			</ImageWrapper>
			<Name>{props.item.name}</Name>
			<Text>{props.item.text}</Text>
		</StyledTeamItem>
	)
}

const StyledTeamItem = styled.div`
	padding-top: 20px;
	padding-right: 20px;
	cursor: pointer;
`
const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 30px;

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
const Image = styled.img`
	width: 100%;
`
const Name = styled.p`
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
