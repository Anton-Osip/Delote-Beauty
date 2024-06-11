import Typewriter from 'typewriter-effect'
import { S } from './Main_styles'

export const Main: React.FC = () => {
	return (
		<S.Main>
			<S.TitleWrapper>
				<S.Text>Салон красоты </S.Text>
				<S.MainTitle>
					<Typewriter
						options={{
							strings: ['«DELOTE BEAUTY»'],
							autoStart: true,
							loop: true,
						}}
					/>
				</S.MainTitle>
				<S.Text>на Крестовском</S.Text>
			</S.TitleWrapper>
			<S.ScrollDown href='#about'>Прокрутите вниз</S.ScrollDown>
		</S.Main>
	)
}
