<script lang="ts">
    import * as config from '$lib/config'
	import { formatDate } from '$lib/utils.js'

    export let data
</script>

<svelte:head>
    <title>{config.title} / {data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p>{formatDate(data.meta.date)}</p>
    </hgroup>

    <div class="tags">
        {#each data.meta.tags as tag}
            <span class="surface-4">&num;{tag}</span>
        {/each}
    </div>

    <div class="prose">
        <svelte:component this={data.content} />
    </div>
</article>

<style>
    article {
        max-inline-size: 60ch;
        margin-inline: auto;
    }
</style>
