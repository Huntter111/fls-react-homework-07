export default {
	pages: {
		home: '/',
		shop: {
			index: '/shop',
			// category: ':category',
			category: {
				index: ':category',
				product: ':id',
			},
		},
		payment: '/payment',
		contacts: '/contacts',
	},
	navigation: {
		home: '/',
		shop: {
			index: '/shop',
		},
		payment: '/payment',
		contacts: '/contacts',
	},
}
