import { useEffect, useMemo, useState } from 'react'
import { useFetching } from '../hooks/useFetching'

import { Loader } from '../components/Loader'
import { NavbarShop } from '../components/NavbarShop'
import { Outlet, useLocation, useParams } from 'react-router'
import apiRoutes from '../api/apiRoutes'

// const url = 'https://dummyjson.com/carts'
// const url = 'https://fakestoreapi.in/api/products'

export const Shop = () => {
	const [carts, setCarts] = useState([])
	const location = useLocation()
	console.log(' Shop ~ location:', location)

	const { category } = useParams()

	const { data, isLoading, error } = useFetching(apiRoutes.productsList)

	useEffect(() => {
		setCarts(data)
	}, [data])

	const categories = useMemo(() => {
		return [...new Set(carts.map((cart) => cart.category))]
	}, [carts])
	const isLoadingCategories = !categories.length

	const filteredCarts = useMemo(() => {
		if (!category) return []
		return carts.filter((cart) => cart.category === category)
	}, [carts, category])

	if (isLoading) {
		return (
			<div className="container flex items-center justify-center h-[300px] py-8">
				{' '}
				<Loader />
			</div>
		)
	}
	if (error) {
		return (
			<div className="container flex flex-col items-center justify-center h-[300px] px-8 text-2xl">
				На жаль сталася помилка
				<div className="pb-20 text-red-600">Error : {error}</div>
			</div>
		)
	}
	return (
		<section className="py-16">
			<div className="container px-8">
				{!category && (
					<>
						<h2 className="mb-8 text-2xl">Список категорій:</h2>
						<NavbarShop
							categories={categories}
							isLoading={isLoadingCategories}
						/>
					</>
				)}
				<div>
					<Outlet context={{ filteredCarts }} />
				</div>
			</div>
		</section>
	)
}
