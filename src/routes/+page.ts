import type { Post, Archive } from '$lib/types'

export async function load({ fetch }) {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()

    const archive: Archive = posts.reduce((acc: Archive, post) => {
        const [year, month] = post.date.split('-').slice(0, 2)
        const key = `${month}-${year}`

        if (!acc[key]) {
            acc[key] = { count: 0, month, year };
        }

        acc[key].count += 1

        return acc
    }, {})

    return { posts, archive }
}