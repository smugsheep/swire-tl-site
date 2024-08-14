<script lang="ts">
    import { formatDate } from '$lib/utils'
    import * as config from '$lib/config'

    export let data
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <ul class="posts">
        {#each data.posts as post}
            <li class="post">
                <a class="title" href="{post.slug}">{post.title}</a>
                <p class="date">{formatDate(post.date)}</p>
                <p class="desc">{post.description ?? 'no desc.'}</p>
            </li>
        {/each}
    </ul>
</section>

<style>
    .posts {
        display: grid;
        gap: 2rem;
    }

    .post {
        max-inline-size: 60ch;
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--border);
        padding-bottom: 1em;
    }

    .title {
        font-size: 3rem;
        text-transform: capitalize;
    }

    .date {
        color: var(--text-2);
    }
</style>