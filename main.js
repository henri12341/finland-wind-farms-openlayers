import './style.css';
import {Feature, Map, Overlay, View} from 'ol/index.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Point} from 'ol/geom.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {useGeographic} from 'ol/proj.js';

useGeographic();

const places = [[24.945831, 60.192059], [24.945831, 62.192059]] // [latitude, longitude]

for (let p in places) {
  console.log(places[p])
  places[p] = new Feature(new Point(places[p]))
}

console.log(places)

const map = new Map({
  target: 'map',

  view: new View({
    center: [24.748151, 64.92411],
    zoom: 5
  }),
  layers: [
    new TileLayer({
      source: new OSM()
    }),
  new VectorLayer({
    source: new VectorSource({
      features: places,
    }),
    style: {
      "circle-radius": 6,
      "circle-fill-color": "blue",
    },
  })
  ]
});


