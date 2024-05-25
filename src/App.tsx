import './App.css'
import { PricePage } from './Pages/pricePage/PricePage'
// import {HomePage} from "./Pages/homePage/HomePage";
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
// import {TeamPage} from "./Pages/teamPage/TeamPage";

function App() {
	return (
		<div className='App'>
			<Header />
			{/*<HomePage/>*/}
			{/* <TeamPage/> */}
			<PricePage />
			<Footer />
		</div>
	)
}

export default App
