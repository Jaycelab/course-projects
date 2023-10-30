import { animals } from './animals';
import React from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = "";
const animalFacts = (<h1>{title}</h1>);
const background = <img src = "/images/ocean.jpg"
className = "background"
alt = "ocean"
/>;
root.render(animalFacts);