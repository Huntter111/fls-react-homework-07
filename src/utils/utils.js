import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
	return twMerge(clsx(inputs))
}
export async function sleep(ms) {
	await new Promise((resolve) => setTimeout(resolve, ms))
}
export function upperFirstLetter(word) {
	return word.charAt(0).toUpperCase() + word.slice(1)
}
