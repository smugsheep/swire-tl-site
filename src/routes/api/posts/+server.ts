import type { Archive, Post } from "$lib/types"
import { json } from "@sveltejs/kit"

async function getPosts() {
    let posts: Post[] = []
    let archive: Archive = {}

    const paths = import.meta.glob('/src/posts/**/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('posts/').at(-1)?.replace('.md', '')

        if (file 
            && typeof file === 'object' 
            && 'metadata' in file
            && slug
        ) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post

            post.published && posts.push(post)

            const [year, month] = post.date.split('-').slice(0, 2)
            const key = `${month}-${year}`

            if (!archive[key]) {
                archive[key] = { count: 0, month, year };
            }

            archive[key].count += 1
        }
    }

    posts = posts.sort((first, second) => 
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )
 
    return { posts, archive }
}

export async function GET() {
    const { posts, archive } = await getPosts()
    return json({ posts, archive })
}
