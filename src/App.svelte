<script>
	import AddWeight from "./components/AddWeight.svelte";
	import WeightList from "./components/WeightList.svelte";
	import AverageWeightByMonth from "./components/AverageWeightByMonth.svelte";
</script>

<main>
	<h1>Weight Tracking App</h1>
	<AddWeight />
	<WeightList />
	<AverageWeightByMonth />
</main>

<style>
	main {
		padding: 0 1em;
		max-width: 80rem;
		margin: 0 auto;
		padding-bottom: 10em;
	}

	h1 {
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 500;
		margin: 0;
	}

	@media (min-width: 640px) {
		h1 {
		font-size: 2.25em;
	}
	}
</style>