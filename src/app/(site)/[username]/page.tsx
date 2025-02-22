import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { StreamOverview } from '@/components/features/stream/overview/StreamOverview'

import {
	FindChannelByUsernameDocument,
	type FindChannelByUsernameQuery
} from '@/graphql/generated/output'

import { SERVER_URL } from '@/libs/constants/url.constants'

import { getMediaSource } from '@/utils/get-media-source'

async function findChannelByUsername(params: { username: string }) {
	try {
		const query = FindChannelByUsernameDocument.loc?.source.body
		const variables = { username: params.username }

		console.log('Fetching data with:', { query, variables })

		const response = await fetch(SERVER_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query, variables }),
			next: { revalidate: 30 }
		})

		console.log('Response status:', response.status)

		const data = await response.json()
		console.log('Response data:', data)

		if (!data?.data?.findChannelByUsername) {
			console.error('Channel not found:', params.username)
			return notFound()
		}

		return { channel: data.data.findChannelByUsername }
	} catch (error) {
		console.error('Error fetching channel:', error)
		return notFound()
	}
}

export async function generateMetadata(props: {
	params: Promise<{ username: string }>
}): Promise<Metadata> {
	const params = await props.params
	console.log(params)
	const { channel } = await findChannelByUsername(params)
	console.log(channel)
	return {
		title: channel.displayName,
		description: channel.bio ?? channel.displayName,
		openGraph: {
			images: [
				{
					url: getMediaSource(channel.avatar),
					alt: channel.displayName
				}
			]
		}
	}
}

export default async function ChannelPage(props: {
	params: Promise<{ username: string }>
}) {
	const params = await props.params

	const { channel } = await findChannelByUsername(params)

	return <StreamOverview channel={channel} />
}
