import styled from 'styled-components'
import { font } from '../../styles/Common'
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
	justify-content: space-between;
	max-width: 722px;
	width: 100%;
	margin: 0 auto;
`

const Link = styled.a`
	${font({
		family: 'Cormorant Garamond',
		weight: 400,
		lineHeight: 1.3,
		Fmax: 24,
		Fmin: 14,
	})}
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
