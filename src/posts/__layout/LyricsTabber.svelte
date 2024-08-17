<script lang="ts">
	import type { TabItem } from "$lib/types"

    let lyricsContent: any

    let lyricsData: TabItem[]
    let lyricsReady = false

    let activeTab = 0;

    function tabLyrics(lyricsText: string) {
        const sections = lyricsText.split('> ')

        const lyricsData = sections.reduce((acc: TabItem[], section: string) => {
            const lines = section.split('\n')
            const label = lines[0].trim()
            const text = lines.slice(1).join('\n')

            if (label) {
                acc.push({ label, text })
            }
            
            return acc
        }, [])
        
        return lyricsData
    }

    const switchTab = (index: number) => {
        activeTab = index;
    };

    $: if (lyricsContent) {
        lyricsReady = true
        lyricsData = tabLyrics(lyricsContent.innerText)
    }
</script>

{#if lyricsReady}
    <div class="lyrics">
        <ul class="lyrics-tabs">
            {#each lyricsData as { label }, index}
                <li class:active={index === activeTab}>
                    <button on:click={() => switchTab(index)}>
                        {label}
                    </button>
                </li>
            {/each}
        </ul>

        <div class="lyrics-content">
            {#if lyricsData[activeTab]}
                <pre>{lyricsData[activeTab].text}</pre>
            {/if}
        </div>
    </div>
{:else}
    <pre bind:this={lyricsContent}><slot></slot></pre>
{/if}

<style>
    
</style>