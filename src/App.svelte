<script>
	import Map from './map/Map.svelte';
</script>

<main>
	<section class="header">
		<h1>VDC</h1>
	</section>
	<Map></Map>
</main>

<style>
	main {
		display: grid;
		grid-template-rows: 1fr min-content;
	}

	.header {
		height: 4rem;
		line-height: 4rem;
		padding: 0 1rem;
		box-shadow: 0 5px 15px rgba(0, 0, 0, .1);
	}

	h1 {
		color: #3d64ad;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 600;
		margin: 0;
	}
</style>