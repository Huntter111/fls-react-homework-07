import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import AppRouter from './routes/AppRouter'

function App() {
	return (
		<>
			<Header />
			<AppRouter />
			<Footer />
		</>
	)
}

export default App
