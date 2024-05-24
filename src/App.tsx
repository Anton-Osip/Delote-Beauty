import './App.css'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { Cosmetics } from './layout/sections/cosmetics/Cosmetics'
import { Main } from './layout/sections/main/Main'
import { Services } from './layout/sections/services/Services'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<About />
			<Services />
			<Cosmetics />
		</div>
	)
}

export default App
