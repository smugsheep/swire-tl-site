// export type Tags = 'translation' | 'game'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    tags: string[]
    published: boolean
}

export type Archive = {
    [key: string]: {
        count: number
        month: string
        year: string
    }
}

export type TabItem = {
    label: string
    text: string
}