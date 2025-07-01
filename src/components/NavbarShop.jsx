import { Link } from 'react-router'
import { Loader } from './Loader'

export const NavbarShop = ({ categories, isLoading }) => {
	if (isLoading) {
		return (
			<div>
				<div className="my-4">Завантажується...</div>
				<Loader />
			</div>
		)
	}

	return (
		<nav className="flex flex-col items-start gap-2 text-xl ">
			{!categories.length ? (
				<div className="my-4">Категорії не знайдені</div>
			) : (
				categories.map((category) => (
					<Link
						key={category}
						to={category}
						className="px-4 py-3 transition-all border-1 rounded-2xl min-w-32 hover:text-blue-500 hover:bg-amber-50 "
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</Link>
				))
			)}
		</nav>
	)
}
