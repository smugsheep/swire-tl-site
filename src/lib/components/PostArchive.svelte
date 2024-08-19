<script lang="ts">
	import type { Archive } from "$lib/types"
    import { getMonthName } from "$lib/utils"
    export let archive: Archive
</script>

<ul class="archive">
    {#each Object.values(archive) as { month, year, count }}
        <li><a href="/{year}/{month}">{getMonthName(month)} {year}</a> ({count})</li>
    {/each}
</ul>

<style>
    .archive li a {
        font-weight: bold;
    }
</style>