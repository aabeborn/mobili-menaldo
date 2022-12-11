'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import ArrowRight from '../../assets/arrow-right.svg?component'
import Menu from '../../assets/menu.svg?component'

const links = new Map<string, string>([
	['/about-us', 'Chi Siamo'],
	['/gallery', 'Gallery'],
	['/contacts', 'Contatti'],
	['https://angolodelbebe.mobilimenaldo.com', 'Angolo del bebè'],
])

export default function Navbar() {
	const path = usePathname()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	function renderLinks(): JSX.Element[] {
		const items: JSX.Element[] = []
		links.forEach((value, key) => {
			items.push(
				<li
					key={value}
					className={`text-sm uppercase m-8 md:mx-8 md:my-0 border-b-2 border-solid border-transparent ${
						path?.startsWith(key)
							? 'text-gold'
							: 'hover:border-gold'
					}`}
				>
					<Link href={key}>{value}</Link>
				</li>
			)
		})
		return items
	}
	// use callback or memo
	function getClasses(): string {
		let classes = ' items-center list-none '
		// mobile classes
		classes += `fixed top-0 left-0 w-full h-full justify-center flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white ${
			isOpen ? 'flex' : 'hidden'
		} `
		// desktp classes
		classes +=
			'md:relative md:text-white md:grow md:inline-flex md:flex-row md:justify-end md:bg-transparent'
		return classes
	}

	return (
		<>
			<ul className={getClasses()}>{renderLinks()}</ul>
			<span className="md:hidden relative">
				{isOpen ? (
					<ArrowRight
						role="button"
						className="fill-gold cursor-pointer z-10 relative h-5 w-5"
						onClick={() => setIsOpen(state => !state)}
					/>
				) : (
					<Menu
						role="button"
						className="fill-white cursor-pointer z-10 relative h-5 w-5"
						onClick={() => setIsOpen(state => !state)}
					/>
				)}
			</span>
		</>
	)
}
