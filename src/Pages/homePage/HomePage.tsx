import { About } from '../../layout/sections/about/About'
import { Main } from '../../layout/sections/main/Main'
import { Services } from '../../layout/sections/services/Services'
// import {Cosmetics} from "../../layout/sections/cosmetics/Cosmetics";
// import {Works} from "../../layout/sections/works/Works";

export function HomePage() {
	return (
		<>
			<Main />
			<About />
			<Services />
			{/*<Cosmetics />
            <Works /> */}
		</>
	)
}
