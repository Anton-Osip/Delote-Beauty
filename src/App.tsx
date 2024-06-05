import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { ContactsPage } from './Pages/contactsPage/ContactsPage'
import { ErrorPage } from './Pages/errorPage/ErrorPage'
import { HomePage } from './Pages/homePage/HomePage'
import { PricePage } from './Pages/pricePage/PricePage'
import { TeamPage } from './Pages/teamPage/TeamPage'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { HeaderMobile } from './layout/header/headerMobile/HeaderMobile'

function App() {
	return (
		<div className='App'>
			<Header />
			<HeaderMobile />
			<Routes>
				<Route path='/' element={<Navigate to={'/home'} />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/team' element={<TeamPage />} />
				<Route path='/price' element={<PricePage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/error' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
