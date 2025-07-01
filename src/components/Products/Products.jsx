import { Link, useOutletContext } from 'react-router'
import { Product } from './Product'

export const Products = () => {
	const { filteredCarts } = useOutletContext()
	return (
		<>
			<div className="mb-4">
				<Link
					to="/shop"
					className="px-4 py-2 transition-all border hover:text-blue-400"
				>
					🠔 До категорій
				</Link>
			</div>
			<div className="grid gap-4 md:grid-cols-2">
				{filteredCarts.length === 0 ? (
					<div className="my-4 text-2xl font-medium">Товари не знайдено!</div>
				) : (
					filteredCarts.map((cart) => <Product key={cart.id} {...cart} />)
				)}
			</div>
		</>
	)
}
