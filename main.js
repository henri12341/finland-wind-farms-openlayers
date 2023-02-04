import './style.css';
import {Feature, Map, Overlay, View} from 'ol/index.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Point} from 'ol/geom.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {useGeographic} from 'ol/proj.js';

useGeographic();

const place = [24.945831, 60.192059]; // [latitude, longitude]
const place2 = [24.945831, 62.192059];

const point = new Point(place);
const point2 = new Point(place2);

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
      features: [new Feature(point), new Feature(point2)],
    }),
    style: {
      "circle-radius": 6,
      "circle-fill-color": "blue",
    },
  })
  ]
});


