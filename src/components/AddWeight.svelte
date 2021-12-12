<script>
    import { WeightStore } from "../store"

    let weight = $WeightStore[0].weight

    const handleSubmit = () => {
        WeightStore.update((currentWeights) => {
        return [{
            weight,
            date: Date.now()
        }, ...currentWeights]
      })

    }
</script>

<form on:submit|preventDefault={handleSubmit}>
<input type=number bind:value={weight}>
    <button >
        Add Weight
    </button>
</form>


<style>
    form{
        display: flex;
        justify-content: end;
    }
    button {
        background: #8C69D0;
        color: #fff;
        padding: 0.6em 1em;
        border-radius: 7px;
    }
</style>