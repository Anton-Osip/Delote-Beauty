import { S } from './Tabs_Styles'

type TabsPropsType = { id: string; text: string; active: boolean }

export const Tabs: React.FC<{
	tabs: TabsPropsType[]
}> = (props: { tabs: TabsPropsType[] }) => {
	return (
		<S.Tabs>
			{props.tabs.map(item => (
				<S.Link
					href='#tabs'
					key={item.id}
					className={item.active ? 'active' : ''}
				>
					{item.text}
				</S.Link>
			))}
		</S.Tabs>
	)
}
