import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import error from '../../../assets/images/Error.png'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { theme } from '../../../styles/Theme'
export function Error() {
	return (
		<StyledError>
			<Container>
				<FlexWrapper direction='column' align='center' justify='center'>
					<Image src={error} alt='error' />
					<SectionTitle>Страница не найдена</SectionTitle>
					<NavLink to='/home'>
						<Link>на главную</Link>
					</NavLink>
				</FlexWrapper>
			</Container>
		</StyledError>
	)
}

const StyledError = styled.section`
	padding: 180px 0 100px;

	${SectionTitle} {
		color: ${theme.colors.borderColor};
	}
`

const Image = styled.img`
	margin-bottom: 24px;
`
const Link = styled.a`
	font-family: 'Cormorant Garamond';
	display: inline-block;
	position: relative;
	font-size: 26px;
	font-weight: 700;
	line-height: 140%;
	&:after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		right: 0;
		display: inline-block;
		height: 2px;
		background-color: ${theme.colors.font};
	}
`
