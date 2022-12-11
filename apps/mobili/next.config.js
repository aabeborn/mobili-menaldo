/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			resourceQuery: /component/,
			use: ['@svgr/webpack'],
		})
		return config
	},
}

module.exports = nextConfig
