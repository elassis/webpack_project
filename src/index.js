/* eslint-disable */
import _ from 'lodash';
import './style.css';
import './status.js';
import { add, deleteItem } from './crud.js'; 
import { dragDrop } from './dragDrop.js';

function component() {
  const element = document.querySelector('.to-do-placeholder');  
  add(element);
  deleteItem();
  dragDrop();
}



component();