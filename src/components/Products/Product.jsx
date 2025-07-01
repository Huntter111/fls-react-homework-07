import { useState } from 'react'

export const Product = ({ title, image, brand, model, price, onClick }) => {
	const [loaded, setLoaded] = useState(false)
	return (
		<article
			className="flex gap-4 p-4 transition-all border rounded-[8px] cursor-pointer hover:scale-101 hover:shadow-xl hover:border-blue-500"
			onClick={onClick}
		>
			<div className="object-cover flex-[40%] relative">
				{!loaded && <div className="absolute inset-0 bg-gray-200"></div>}
				<img
					src={image}
					alt={`picture ${title}`}
					loading="lazy"
					className="object-cover max-w-full"
					onLoad={() => setLoaded(true)}
				/>
			</div>

			<div className="flex-[60%] leading-tight md:leading-normal">
				<h2 className="sm:text-[18px] ">{title}</h2>
				<div className="text-2xl">{price}$</div>
				<div className="flex flex-col gap-1">
					<div>
						Brand: <span className="font-bold">{brand}</span>
					</div>
					<div>
						Model: <span className="font-bold ">{model}</span>
					</div>
				</div>
			</div>
		</article>
	)
}
