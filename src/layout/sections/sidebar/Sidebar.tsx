import styled, { css } from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Burger } from '../../../components/burger/Burger'
import { Contact } from '../../../components/contact/Contact'
import { OperatingMode } from '../../../components/operatingMode/OperatingMode'
import { theme } from '../../../styles/Theme'
type SidebarPropsType = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}
export default function Sidebar(props: SidebarPropsType) {
	return (
		<StyledSidebar isOpen={props.isOpen}>
			<FlexWrapper direction='column' justify='space-around'>
				<Burger isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
					adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl
					est felis id volutpat. Sed dolor fermentum amet lectus nibh quis.
					Tortor donec pellentesque leo ac placerat. Morbi.
				</Text>
				<Contact />
				<OperatingMode />
			</FlexWrapper>
		</StyledSidebar>
	)
}

const StyledSidebar = styled.div<{ isOpen: boolean }>`
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	width: 475px;
	background: ${theme.colors.font};
	background-color: ${theme.colors.backgroundColor};
	padding: 0 80px;

	${FlexWrapper} {
		height: 100%;
	}

	${props =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			right: -100%;
		`}
`
const Text = styled.p`
	font-family: 'Cormorant Garamond';
	font-size: 18px;
	font-weight: 400;
	line-height: 130%;
`
