<script>
	import Router from "svelte-spa-router";
	import Info from "./Info.svelte";

	const routes = {

		"/info": Info,
	};

</script>

<main>
	<Router {routes} />
</main>
