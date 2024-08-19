import type { Archive, Post } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
    const response = await fetch('../api/posts')
    let { posts, archive } = await response.json() as { posts: Post[], archive: Archive }

    posts = posts.filter(post => {
        return post.date.split('-')[0].includes(params.year) 
            && post.date.split('-')[1].includes(params.month)
    })

    if (posts.length === 0) {
        throw error(404, `Could not find any posts in ${params.year}/${params.month}.`)
    }

    return { posts, archive }
}