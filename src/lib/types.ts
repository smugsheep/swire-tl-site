export type Tags = 'translation' | 'game'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    tags: Tags[]
    published: boolean
}