import Logo from '../Logo'
import { Navbar } from '../Navbar'

export const Header = () => {
	return (
		<header className="header py-4">
			<div className="container flex items-center md:text-xl">
				<Logo />
				<Navbar />
			</div>
		</header>
	)
}
