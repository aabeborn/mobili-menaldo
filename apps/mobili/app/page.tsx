import Image from 'next/image'

export default function Home() {
	const isNight = new Date().getHours() < 7 || new Date().getHours() > 20
	return (
		<>
			<div className="absolute top-0 left-0 w-full h-full z-0 ">
				<Image
					src={`/home-${isNight ? 'night' : 'day'}.jpg`}
					fill
					className="object-center object-cover"
					alt="background"
				/>
			</div>
		</>
	)
}
