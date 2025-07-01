import { useEffect, useState } from 'react'
import { sleep } from '../utils/utils'

export const useFetching = (url) => {
	const [data, setData] = useState(() => [])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	useEffect(() => {
		const abortController = new AbortController()
		const signal = abortController.signal

		const fetchData = async () => {
			setIsLoading(true)
			await sleep(1000)
			try {
				const response = await fetch(url, { signal })
				if (!response.ok) {
					throw new Error(`HTTP error! Status ${response.status}`)
				}
				const data = await response.json()
				setData(data.products)
			} catch (error) {
				if (error.name === 'AbortError') {
					console.log('Fetch request aborted.')
					return
				}
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
		return () => {
			abortController.abort()
			console.log('Мережевий запит скасовано при очищенні!')
		}
	}, [url])

	return { data, isLoading, error }
}
