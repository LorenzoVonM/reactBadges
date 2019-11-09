// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';

//const element = <h1>Hello, Platzi Badgesdddd!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badge 
    firstName='Leo' 
    lastName='Hernández'
    jobTitle='Fullstack Dev'
    twitter='leo_Supernova'
    avatarUrl='https://s.gravatar.com/avatar/6d0594db0a0ade9b4302932bd113a271?s=80'
  />, 
  container
);
