import {tns} from '../lib/tiny-slider/src/tiny-slider.js';

var slider = tns({
  container: '.my-slider',
  mode: 'carousel',
  items: 7,
  speed: 1000,
  controls: false,
  touch: true,
  mouseDrag: true,
  navPosition: 'bottom',
  navContainer: '.carousel__nav',
  axis: 'horizontal',
  slideBy: 'page',
  loop: false,
});
