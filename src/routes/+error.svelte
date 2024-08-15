<script lang="ts">
    import { page } from "$app/stores"
</script>

<div class="error">
    <hgroup>
        <h1>{$page.status}</h1>
        <p>{$page.error?.message}</p>
    </hgroup>
</div>

<style>
    .error {
        height: 100%;
        display: grid;
        place-content: center;
    }

    h1 {
        margin: 0;
        font-size: 4rem;
    }

    p {
        margin: 0;
        font-size: 2rem;
    }
</style>