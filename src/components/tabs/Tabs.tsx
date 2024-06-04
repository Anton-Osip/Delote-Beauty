import styled from 'styled-components'
import { theme } from '../../styles/Theme'

type TabsPropsType = { id: string; text: string; active: boolean }

export function Tabs(props: { tabs: TabsPropsType[] }) {
	return (
		<StyledTabs>
			{props.tabs.map(item => (
				<Link
					href='#tabs'
					key={item.id}
					className={item.active ? 'active' : ''}
				>
					{item.text}
				</Link>
			))}
		</StyledTabs>
	)
}

const StyledTabs = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 60px;
`

const Link = styled.a`
	font-family: Cormorant Garamond;
	font-size: 24px;
	font-weight: 400;
	line-height: 130%;
	letter-spacing: 0%;
	&.active {
		color: ${theme.colors.borderColor};
		position: relative;
		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			bottom: -4px;
			left: 0;
			right: 0;
			height: 2px;
			background-color: ${theme.colors.borderColor};
		}
	}
`
