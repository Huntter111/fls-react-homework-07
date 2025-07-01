import { Link } from 'react-router'

export const Page404 = () => {
	return (
		<section>
			<div className="container">
				На жаль сторінку не знайдено{' '}
				<Link to="/" className="btn">
					На головну
				</Link>
			</div>
		</section>
	)
}
