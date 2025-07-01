import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { Shop } from '../pages/Shop'
import { Payment } from '../pages/Payment'
import { Contacts } from '../pages/Contacts'
import { Products } from '../components/Products/Products'
import { Page404 } from '../components/Page404'

const AppRouter = () => {
	return (
		<main className="main">
			<Routes>
				<Route index element={<Home />} />
				<Route path="/shop" element={<Shop />}>
					<Route path=":category" element={<Products />} />
				</Route>
				<Route path="/payment" element={<Payment />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</main>
	)
}

export default AppRouter
