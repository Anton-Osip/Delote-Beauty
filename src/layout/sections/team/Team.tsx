import styled from 'styled-components'
import img1 from '../../../assets/images/teams/team-1.jpg'
import img2 from '../../../assets/images/teams/team-2.jpg'
import img3 from '../../../assets/images/teams/team-3.jpg'
import img4 from '../../../assets/images/teams/team-4.jpg'
import img5 from '../../../assets/images/teams/team-5.jpg'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { TeamItem } from './teamItem/TeamItem'

const teamItem = [
	{ id: 'team1', src: img1, name: 'Елена Васильевна', text: 'Визажист' },
	{ id: 'team2', src: img2, name: 'Елена Васильевна', text: 'Визажист' },
	{ id: 'team3', src: img3, name: 'Елена Васильевна', text: 'Визажист' },
	{ id: 'team4', src: img4, name: 'Елена Васильевна', text: 'Визажист' },
	{ id: 'team5', src: img5, name: 'Елена Васильевна', text: 'Визажист' },
	{ id: 'team6', src: img2, name: 'Елена Васильевна', text: 'Визажист' },
]

export function Team() {
	return (
		<StyledTeam>
			<Container>
				<SectionTitle>Наши мастера</SectionTitle>
				<TeamWrapper>
					{teamItem.map(item => (
						<TeamItem item={item} key={item.id} />
					))}
				</TeamWrapper>
			</Container>
		</StyledTeam>
	)
}

const StyledTeam = styled.section`
	padding: 180px 0 100px;
`
const TeamWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 60px;
	column-gap: 24px;
`
