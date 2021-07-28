import './style.css';
import ListItem from './crud.js';
import interactions from './interactions.js';
import dragDrop from './dragDrop.js';


const component = () => {
  ListItem.init();
  interactions.init();
  dragDrop();
};

component();
