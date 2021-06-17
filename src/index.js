import * as util from './util';
import WebpackImage from './assets/image.png';
import './styles/index.css';

const amount = util.sum(10, 20) ?? 0;
console.log('__amount__', amount);

console.log('Tail:', util.getTail([1, 2, 3, 4]));

/* Create a new header and append to the DOM */

const h2 = document.createElement('h2');
h2.classList.add('h2__color');
h2.textContent = 'Hello Webpack';
document.body.appendChild(h2);

/* Create a new image and append to the DOM */

const image = new Image();
image.src = WebpackImage;
image.classList.add('image__square');
document.body.appendChild(image);
