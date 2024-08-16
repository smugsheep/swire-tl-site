<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './Toggle.svelte'
</script>

<nav>
	<div class="info">
        <a class="title" href="/">
            {config.title}
        </a>
    
        <ul class="links">
            <li><a href="/about">about</a></li>
            <li><a href="/index">index</a></li>
            <li><a href="/requests">requests</a></li>
            <li><a href="/rss.xml" target="_blank">RSS</a></li>
        </ul>
    </div>

	<Toggle />
</nav>

<style>
	.links {
		margin-block: 0;
        font-size: 1.2rem;
        display: flex;
	}

    li:not(:last-child)::after {
        content: '/';
        padding-inline: 1rem;
    }

    .title {
        font-size: 2rem;
        font-family: var(--font-serif);
        font-weight: bold;
    }

	a {
        /* font-family: var(--font-serif); */
		text-decoration: none;
	}

    nav {
        padding-block: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: end;
        border-bottom: 1px solid var(--border)
    }

	@media (min-width: 768px) {

	}
</style>
