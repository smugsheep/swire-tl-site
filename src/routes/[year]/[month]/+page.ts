import type { Post } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
    const response = await fetch('../api/posts')
    let posts: Post[] = await response.json()

    posts = posts.filter(post => {
        return post.date.includes(params.year) && post.date.includes(params.month)
    })

    if (posts.length === 0) {
        throw error(404, `Could not find any posts in ${params.year}/${params.month}.`)
    }

    return { posts }
}