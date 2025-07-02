import { NavLink } from 'react-router'
import { cn } from '../utils/utils'
import frontRoutes from '../routes/frontRoutes'

export const Navbar = () => {
	return (
		<nav className="flex flex-wrap gap-4">
			<NavLink
				to={frontRoutes.navigation.home}
				className={({ isActive }) =>
					cn(
						'hover:text-blue-500 transition-all py-1 px-2 border border-transparent rounded-md',
						{
							'border border-blue-500 text-blue-500': isActive,
						},
					)
				}
			>
				Home
			</NavLink>
			<NavLink
				to={frontRoutes.navigation.shop.index}
				className={({ isActive }) =>
					cn(
						'hover:text-blue-500 transition-all py-1 px-2 border border-transparent rounded-md',
						{
							'border border-blue-500 text-blue-500': isActive,
						},
					)
				}
			>
				Shop
			</NavLink>
			<NavLink
				to={frontRoutes.navigation.payment}
				className={({ isActive }) =>
					cn(
						'hover:text-blue-500 transition-all py-1 px-2 border border-transparent rounded-md',
						{
							'border border-blue-500 text-blue-500': isActive,
						},
					)
				}
			>
				Payment
			</NavLink>
			<NavLink
				to={frontRoutes.navigation.contacts}
				className={({ isActive }) =>
					cn(
						'hover:text-blue-500 transition-all py-1 px-2 border border-transparent rounded-md',
						{
							'border border-blue-500 text-blue-500': isActive,
						},
					)
				}
			>
				Payment
			</NavLink>
		</nav>
	)
}
