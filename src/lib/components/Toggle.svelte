<script lang="ts">
    import { fly } from "svelte/transition"
    import { Sun, Moon } from "lucide-svelte";
    import { theme, toggleTheme } from "$lib/themes"

    const iconSize = 40
    const iconStroke = 1.5
</script>

<button on:click={toggleTheme} aria-label="toggle theme">
    {#if $theme === 'dark'}
        <div in:fly={{ y: 10 }}>
            <Sun size={iconSize} strokeWidth={iconStroke} />
        </div>
    {:else}
        <div in:fly={{ y: -10 }}>
            <Moon size={iconSize} strokeWidth={iconStroke} />
        </div>
    {/if}
</button>

<style>
    button {
        color: var(--brand);
        padding: 0 4px;
        border: none;
        background: none;
        box-shadow: none;
        overflow: hidden;
        position: relative;
        bottom: -3px;
    }
</style>