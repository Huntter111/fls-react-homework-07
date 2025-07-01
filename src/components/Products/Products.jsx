import {
	Link,
	Outlet,
	useNavigate,
	useOutletContext,
	useParams,
} from 'react-router'
import { Product } from './Product'
import frontRoutes from '../../routes/frontRoutes'
import { useMemo } from 'react'

export const Products = () => {
	const { filteredCarts } = useOutletContext()
	// console.log(' Products ~ filteredCarts:', filteredCarts)
	const navigate = useNavigate()
	const { category, id } = useParams()

	function info(product) {
		navigate(`/shop/${category}/${product.id}`)
	}
	const selectedProduct = useMemo(() => {
		return filteredCarts.find((prod) => prod.id === Number(id))
	}, [filteredCarts, id])
	return (
		<>
			<div className="flex gap-4 mb-4">
				{category && !id && (
					<Link
						to={frontRoutes.pages.shop.index}
						className="px-4 py-2 transition-all border hover:text-blue-400"
					>
						🠔 До категорій
					</Link>
				)}
				{id && (
					<Link
						to={`/shop/${category}`}
						className="px-4 py-2 transition-all border hover:text-blue-400"
					>
						🠔 До товарів
					</Link>
				)}
			</div>
			<div className="grid gap-4 md:grid-cols-2">
				{!id && (
					<>
						{filteredCarts.length === 0 ? (
							<div className="my-4 text-2xl font-medium">
								Товари не знайдено!
							</div>
						) : (
							filteredCarts.map((cart) => (
								<Product key={cart.id} {...cart} onClick={() => info(cart)} />
							))
						)}
					</>
				)}
			</div>
			<div>
				<Outlet context={{ selectedProduct }} />
			</div>
		</>
	)
}
