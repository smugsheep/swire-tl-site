<script lang="ts">
	import * as config from '$lib/config'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		border-top: 1px solid var(--brand);
	}

	p {
		margin-block: 1rem;
	}
</style>
