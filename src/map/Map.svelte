<script lang="ts">
  import mapboxgl from "mapbox-gl";
  import { onMount } from "svelte";
  import 'mapbox-gl/dist/mapbox-gl.css';

  onMount(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoicm9ib3JvdG9yb3RvIiwiYSI6ImNsMTdka3A2OTFvMHczam4xNnA1aDFycTUifQ.ceWbgCpz9W67WrWuNW8bDw";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  });
</script>

<div id="map" />

<style>
  #map {
    height: calc(100vh - 64px);
  }
</style>
