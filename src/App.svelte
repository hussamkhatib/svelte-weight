<script>
	import AddWeightBtn from "./components/AddWeightBtn.svelte";
	import WeightList from "./components/WeightList.svelte";

	let weightsByDate = [
		{
			id:1,
			weight: 56,
			date: '18Nov2020'
		},	{
			id:2,
			weight: 56.1,
			date: '17Nov2020'
		},
		{
			id:3,
			weight: 56.2,
			date: '16Nov2020'
		}
	]

</script>

<main>
	<h1>Weight Tracking App</h1>
	<AddWeightBtn />
	<WeightList {weightsByDate}/>
</main>

<style>
	main {
		padding: 0 1em;
		max-width: 80rem;
		margin: 0 auto;
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