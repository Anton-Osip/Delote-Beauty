import './App.css'
// import {HomePage} from "./Pages/homePage/HomePage";
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {TeamPage} from "./Pages/teamPage/TeamPage";


function App() {
	return (
		<div className='App'>
			<Header />
			{/*<HomePage/>*/}
			<TeamPage/>
			<Footer />

		</div>
	)
}

export default App
