import './App.css'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { Cosmetics } from './layout/sections/cosmetics/Cosmetics'
import { Main } from './layout/sections/main/Main'
import { Services } from './layout/sections/services/Services'
import { Works } from './layout/sections/works/Works'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<About />
			<Services />
			<Cosmetics />
			<Works />
			<Footer />
		</div>
	)
}

export default App
