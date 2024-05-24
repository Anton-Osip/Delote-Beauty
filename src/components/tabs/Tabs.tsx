import styled from 'styled-components'

type TabsPropsType = { id: string; text: string; active: boolean }

export function Tabs(props: { tabs: TabsPropsType[] }) {
	return (
		<StyledTabs>
			{props.tabs.map(item => (
				<Link href='#tabs' key={item.id}>
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

const Link = styled.a``
