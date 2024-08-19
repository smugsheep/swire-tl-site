import type { Archive, Post } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
    const response = await fetch('/api/posts')
    let { posts, archive } = await response.json() as { posts: Post[], archive: Archive }

    posts = posts.filter(post => {
        return post.tags.includes(params.tag) 
    })

    if (posts.length === 0) {
        throw error(404, `Could not find any posts tagged ${params.tag}.`)
    }

    return { posts, archive }
}