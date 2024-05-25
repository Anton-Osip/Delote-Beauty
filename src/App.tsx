import './App.css'
import {HomePage} from "./Pages/homePage/HomePage";
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";


function App() {
	return (
		<div className='App'>
			<Header />
			<HomePage/>
			<Footer />

		</div>
	)
}

export default App
