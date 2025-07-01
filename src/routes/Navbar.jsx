import { NavLink } from 'react-router'
import { cn } from '../utils/utils'

const links = [
	{
		to: '/',
		name: 'Home',
	},
	{
		to: '/shop',
		name: 'Shop',
	},
	{
		to: '/payment',
		name: 'Payment',
	},
	{
		to: '/contacts',
		name: 'Contacts',
	},
]
export const Navbar = () => {
	return (
		<nav className="flex flex-wrap gap-4">
			{links.map((link) => (
				<NavLink
					to={link.to}
					key={link.to}
					className={({ isActive }) =>
						cn(
							'hover:text-blue-500 transition-all py-1 px-2 border border-transparent rounded-md',
							{
								'border border-blue-500 text-blue-500': isActive,
							},
						)
					}
				>
					{link.name}
				</NavLink>
			))}
		</nav>
	)
}
