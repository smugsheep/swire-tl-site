<script lang="ts">
    import { formatDate, getMonthName } from '$lib/utils'
    import * as config from '$lib/config'
    
    export let data
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <ul class="archive">
        {#each Object.values(data.archive) as { month, year, count }}
            <li><a href="{year}/{month}">{getMonthName(month)} {year}</a> ({count})</li>
        {/each}
    </ul>

    <ul class="posts">
        {#each data.posts as post}
            <li class="post">
                <div class="info-main">
                    <a class="title" href="{post.slug}">{post.title}</a>
                    <p class="desc">{post.description ?? 'no desc.'}</p>
                </div>
                <div class="info-sub">
                    <p class="date">
                        Posted on <b>{formatDate(post.date + 'EST', "long", "en-GB")}</b>
                    </p>
                    <p class="tags">
                        Tagged 
                        {#each post.tags as tag}
                            <a href="/tags/{tag}"><b>{tag}</b></a>
                        {/each}
                    </p>
                </div>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    li * {
        margin: 0;
    }

    .posts {
        display: grid;
    }

    .post {
        display: grid;
        gap: 1rem;
        padding-block: 1rem 1.5rem;
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--border);
    }

    .title {
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
    }

    .title:hover {
        text-decoration: underline;
    }

    .tags a {
        text-decoration: none;
    }

    .tags a:not(:last-child)::after {
        content: ', ';
    }

    .archive li a {
        font-weight: bold;
    }
</style>