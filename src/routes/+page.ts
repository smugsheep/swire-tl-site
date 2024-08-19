import type { Post, Archive } from '$lib/types'

export async function load({ fetch }) {
    const response = await fetch('api/posts')
    const { posts, archive } = await response.json() as { posts: Post[], archive: Archive }

    return { posts, archive }
}