<script lang="ts">
  import mapboxgl from "mapbox-gl";
  import { onMount } from "svelte";
  import "mapbox-gl/dist/mapbox-gl.css";
import { addCircleLayer, addSource, getToken, showCoordsOnClick } from "./map.service";

  onMount(() => {
    mapboxgl.accessToken = getToken();
    const map = new mapboxgl.Map({
      container: "map",
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/mapbox/light-v8",
      center: [-74.5, 40],
      zoom: 5,
    });

    map.on("style.load", () => {
      addSource(map);
      addCircleLayer(map);
      showCoordsOnClick(map);
    });

  });
</script>

<div id="map" />

<style>
  #map {
    height: calc(100vh - 64px);
  }
</style>
