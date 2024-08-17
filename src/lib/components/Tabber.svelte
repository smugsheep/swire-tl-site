<script lang="ts">
    import type { TabItem } from "$lib/types";

    export let items: TabItem[] = []

    let selectedTab = 0
</script>

<div class="tabber">
    <div class="tabs">
        {#each items as { label }, index}
            <button 
                class:active={index === selectedTab}
                on:click={() => (selectedTab = index)}
            >
                {label}
            </button>
        {/each}
    </div>

    <div class="content">
        {@html items[selectedTab].content}
    </div>
</div>