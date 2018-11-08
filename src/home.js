import React from 'react';
import { render } from 'react-dom';
import Home from './pages/containers/home';
import data from './products.js';

console.log('hola mundo');
const homeContainer = document.getElementById('home-container');

render(<Home data={data}/>, homeContainer);