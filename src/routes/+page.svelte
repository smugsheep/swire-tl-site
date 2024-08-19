<script lang="ts">
    import PostArchive from '$lib/components/PostArchive.svelte'
    import PostList from '$lib/components/PostList.svelte'
    import * as config from '$lib/config'
    
    export let data
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section>
    <PostArchive archive={data.archive}></PostArchive>
    <PostList posts={data.posts}></PostList>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
</style>