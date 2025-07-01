import { useOutletContext } from 'react-router'
import { upperFirstLetter } from '../../utils/utils'

export const ProductDetails = () => {
	const { selectedProduct } = useOutletContext()
	const {
		brand,
		category,
		color,
		description,
		image,
		model,
		popular,
		price,
		title,
	} = selectedProduct
	console.log(' ProductDetails ~ selectedProduct:', selectedProduct)
	if (!selectedProduct) {
		return <div className="my-4 text-xl">Товар не знайдено</div>
	}
	return (
		<div className="gap-8 p-4 border md:flex">
			<div className="relative p-2 flex-1/2">
				<img src={image} alt={title} className="mb-4 " />
				<div className=" absolute top-0 left-[-16px] py-1 px-2 md:px-4 md:py-2 bg-amber-600 rounded-r-[8px]">
					{category && upperFirstLetter(category)}
				</div>
				{popular && (
					<div className="absolute top-[48px] left-[-16px] px-4 py-2 bg-blue-500 rounded-r-[8px]">
						Popular
					</div>
				)}
			</div>
			<div className="flex-1/2">
				<h2 className="mb-4 text-2xl">{title}</h2>
				<div className="mb-4 md:mb-8 ">
					<p className="text-xl">
						Price: <span className="font-semibold">{price}$</span>
					</p>
					<p>Brand: {brand ? upperFirstLetter(brand) : 'not specified'}</p>
					<p>Model: {model}</p>
					<p>Color: {color ? upperFirstLetter(color) : 'not specified'}</p>
				</div>
				<p>Description: {description}</p>
			</div>
		</div>
	)
}
