/* eslint-disable */
import _ from 'lodash';
import './style.css';
import {status} from './status.js';
import {dragDrop} from './dragDrop.js';
import {add} from './crud.js';

function component() {
  const element = document.querySelector('.to-do-placeholder');  
  add(element);
  status();
  dragDrop();
}



document.body.appendChild(component());