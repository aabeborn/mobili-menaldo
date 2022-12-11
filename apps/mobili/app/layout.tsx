import Header from '../components/header'
import './globals.css'
import { Space_Grotesk } from '@next/font/google'

const font = Space_Grotesk()

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body className={`${font.className} p-8 bg-zinc-900`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
