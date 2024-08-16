<script lang="ts">
    import { formatDate } from '$lib/utils'
    import * as config from '$lib/config'

    export let data
</script>

<section>
    <ul class="posts">
        {#each data.posts as post}
            <li class="post">
                <a class="title" href="/{post.slug}">{post.title}</a>
                <p class="date">{formatDate(post.date)}</p>
                <p class="desc">{post.description ?? 'no desc.'}</p>
            </li>
        {/each}
    </ul>
</section>