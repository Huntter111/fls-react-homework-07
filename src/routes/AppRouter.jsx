import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { Shop } from '../pages/Shop'
import { Payment } from '../pages/Payment'
import { Contacts } from '../pages/Contacts'
import { Products } from '../components/Products/Products'
import { Page404 } from '../components/Page404'
import frontRoutes from './frontRoutes'
import { ProductDetails } from '../components/Products/ProductDetails'

const AppRouter = () => {
	console.log('frontend routes')
	console.log(frontRoutes.pages.shop.category.product)
	return (
		<main className="main">
			<Routes>
				<Route index element={<Home />} />
				<Route path={frontRoutes.pages.shop.index} element={<Shop />}>
					<Route
						path={frontRoutes.pages.shop.category.index}
						element={<Products />}
					>
						<Route
							path={frontRoutes.pages.shop.category.product}
							element={<ProductDetails />}
						/>
					</Route>
				</Route>
				<Route path={frontRoutes.pages.payment} element={<Payment />} />
				<Route path={frontRoutes.pages.contacts} element={<Contacts />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</main>
	)
}

export default AppRouter
