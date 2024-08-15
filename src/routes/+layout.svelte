<script lang="ts">
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
    import Transition from './Transition.svelte'
    
	import '../app.css'

    export let data
</script>

<div class="layout">
	<Header />

	<main>
        <Transition url={data.url}>
            <slot />
        </Transition>
    </main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: 0.5rem;
	}

	main {
		padding-block: 2rem;
	}

	@media (min-width: 1080px) {
		.layout {
			padding-inline: 0;
			margin-inline: 15vw;
		}
	}
</style>
