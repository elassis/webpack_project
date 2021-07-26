/* eslint-disable */
import _ from 'lodash';
import './style.css';
import { listItem } from './crud.js';
import { interactions } from './interactions.js';
import { dragDrop } from './dragDrop';


const component = () => {
 
  listItem.init();
  interactions.init();
  dragDrop();

  
}



component();