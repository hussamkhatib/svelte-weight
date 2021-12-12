<script>
    import WeightListItem from "./WeightListItem.svelte";
    export let weightsByDate = []
</script>

<section>
    <h3>
        This week
    </h3>
	{#each weightsByDate as weightByDate (weightByDate.id)}
        <WeightListItem {weightByDate}/>
    {/each}
</section>

<style>
    section {
        background: #fff;
        padding: 1em 0;
        margin: 2em auto;
        width: 40rem;
        max-width: 100%;
    }
    h3{
        padding: 0 1em;
        margin: 0;
    }
</style>