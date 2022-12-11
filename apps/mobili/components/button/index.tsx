export default function Button({
	children,
	variant = 'basic',
	icon,
}: {
	children: React.ReactNode
	variant?: 'primary' | 'basic'
	icon?: React.ReactNode
	onClick: React.MouseEventHandler<HTMLElement>
}) {
	function getVariantClasses(): string {
		if (variant === 'basic')
			return 'bg-zinc-900 dark:bg-zinc-900 text-white dark:bg-white'
		else return 'bg-gold text-zinc-900'
	}

	return (
		<button
			className={`${getVariantClasses()} `}
			role="button"
		>
			{icon}
			{children}
		</button>
	)
}
