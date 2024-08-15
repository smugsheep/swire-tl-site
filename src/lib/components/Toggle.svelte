<script lang="ts">
    import { fly } from "svelte/transition"
    import { theme, toggleTheme } from "$lib/themes"
</script>

<button on:click={toggleTheme} aria-label="toggle theme">
    {#if $theme === 'dark'}
        <div in:fly={{ y: 10 }}>
            LIGHT
        </div>
    {:else}
        <div in:fly={{ y: -10 }}>
            DARK
        </div>
    {/if}
</button>

<style>
    button {
        padding: 0;
        font-weight: inherit;
        border: none;
        background: none;
        box-shadow: none;
        overflow: hidden;
    }

    button * {
        display: flex;
        gap: 1rem;
    }
</style>