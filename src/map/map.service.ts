import * as mapboxgl from "mapbox-gl";

export function showCoordsOnClick(map) {
  map.on("click", (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`
          <p>Latitude: ${e.lngLat.lat}<br />Longitude: ${e.lngLat.lng}</p>
        `)
      .addTo(map);
  });
}

export function addCircleLayer(map) {
  map.addLayer({
    id: `just-circle`,
    source: "someSource",
    type: "circle",
    filter: ["==", "testFilter", 1],
    paint: {
      "circle-color": ["coalesce", ["get", "icon-color"], ["get", "fill"]],
      "circle-opacity": 1,
      "circle-radius": 7,
      "circle-stroke-color": "#ffffff",
      "circle-stroke-width": 1,
    },
  });
}

export function addSource(map) {
  map.addSource("someSource", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-77.03238901390978, 38.913188059745586],
          },
          properties: {
            testFilter: 1,
          },
        },
      ],
    },
  });
}

export function getToken() {
  return "pk.eyJ1Ijoicm9ib3JvdG9yb3RvIiwiYSI6ImNsMTdka3A2OTFvMHczam4xNnA1aDFycTUifQ.ceWbgCpz9W67WrWuNW8bDw";
}