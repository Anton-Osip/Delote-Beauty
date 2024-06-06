import { About } from '../../layout/sections/about/About'
import { Cosmetics } from '../../layout/sections/cosmetics/Cosmetics'
import { Main } from '../../layout/sections/main/Main'
import { Services } from '../../layout/sections/services/Services'
import { Works } from '../../layout/sections/works/Works'

export const HomePage: React.FC = () => {
	return (
		<>
			<Main />
			<About />
			<Services />
			<Cosmetics />
			<Works />
		</>
	)
}
