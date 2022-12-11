'use client'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Header() {
	return (
		<header className="w-full flex items-center justify-between z-10 relative">
			<Link href="/">
				<Image
					src="/logo-white.svg"
					alt="logo"
					width={202}
					height={18}
				/>
			</Link>
			<Navbar />
		</header>
	)
}
