import { Link } from 'react-router'

export const Page404 = () => {
	return (
		<section className="py-10">
			<div className="container flex flex-col items-start gap-8">
				<div className="text-2xl">Сторінку не знайдено!</div>
				<Link to="/" className="link-btn">
					На головну
				</Link>
			</div>
		</section>
	)
}
