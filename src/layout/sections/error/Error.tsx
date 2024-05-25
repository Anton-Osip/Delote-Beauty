import styled from 'styled-components'
import error from '../../../assets/images/Error.png'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
export function Error() {
	return (
		<StyledError>
			<FlexWrapper direction='column' align='center' justify='center'>
				<Image src={error} alt='error' />
				<SectionTitle>Страница не найдена</SectionTitle>
				<Link href='#'>на Главную</Link>
			</FlexWrapper>
		</StyledError>
	)
}

const StyledError = styled.section`
	min-height: 100vh;
	background-color: #f9a2a2;
`

const Image = styled.img``
const Link = styled.a``
