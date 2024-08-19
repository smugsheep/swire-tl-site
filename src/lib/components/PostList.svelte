<script lang="ts">
    import { formatDate } from "$lib/utils";
    export let posts

    let showPosts = 8

    function handleSeeMore() {
        showPosts += 8
    }
</script>

<ul class="posts">
    {#each posts.slice(0, showPosts) as post}
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

{#if posts.length > showPosts}
    <button on:click={handleSeeMore}>see more</button>
{/if}

<style>
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
</style>