<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './Toggle.svelte'
</script>

<nav>
	<a href="/">
		{config.title}
	</a>

	<ul class="links">
		<li><a href="/about">about</a></li>
		<li><a href="/index">index</a></li>
		<li><a href="/rss.xml" target="_blank">RSS</a></li>
	</ul>

	<Toggle />
</nav>

<style>
	.links {
		margin-block: 2em;
	}

	a {
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			padding-block: 2em;
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: 1em;
			margin-block: 0;
		}
	}
</style>
