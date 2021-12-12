<script>
    import WeightListItem from "./WeightListItem.svelte";
    import { WeightStore } from "../store"
</script>

<section>
    <h3>    
        This week
    </h3>
	{#each $WeightStore as weightObj (weightObj.date)}
        <WeightListItem {weightObj}/>
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