import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts')

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '29a14ff2-9778-4447-a8b5-e00d3d0247ef.selstorage.ru'
			}
		]
	}
}

export default withNextIntl(nextConfig)
