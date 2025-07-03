import Logo from '../Logo'
import { Navbar } from '../Navbar'

export const Header = () => {
	return (
		<header className="py-4 header">
			<div className="container flex items-center gap-8 md:text-xl">
				<Logo />
				<Navbar />
			</div>
		</header>
	)
}
