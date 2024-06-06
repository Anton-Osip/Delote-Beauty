import work1 from '../../../assets/images/works/work-1.jpg'
import work2 from '../../../assets/images/works/work-2.jpg'
import work3 from '../../../assets/images/works/work-3.jpg'
import work4 from '../../../assets/images/works/work-4.jpg'
import work5 from '../../../assets/images/works/work-5.jpg'
import work6 from '../../../assets/images/works/work-6.jpg'
import work7 from '../../../assets/images/works/work-7.jpg'
import work8 from '../../../assets/images/works/work-8.jpg'
import work9 from '../../../assets/images/works/work-9.jpg'
import { Container } from '../../../components/Container'
import { SectionTitle } from '../../../components/SectionTitle'
import { Tabs } from '../../../components/tabs/Tabs'
import { S } from './Works_Styles'

const DataTabs = [
	{ id: 'tab1', text: 'Показать все', active: true },
	{ id: 'tab2', text: 'Парикмахерские услуги', active: false },
	{ id: 'tab3', text: 'Маникюр', active: false },
	{ id: 'tab4', text: 'Педикюр', active: false },
]

const worksImg = [work1, work2, work3, work4, work5, work6, work7, work8, work9]

export const Works: React.FC = () => {
	return (
		<S.Works>
			<Container>
				<SectionTitle>Наши работы</SectionTitle>
				<Tabs tabs={DataTabs} />
				<S.WorksWrapper>
					{worksImg.map((item, index) => (
						<S.Image src={item} key={`works${index}`} />
					))}
				</S.WorksWrapper>
			</Container>
		</S.Works>
	)
}
