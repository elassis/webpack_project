import './style.css';
import { ListItem } from './crud.js';
import { interactions } from './interactions.js';
import { dragDrop } from './dragDrop';


const component = () => {
 
  ListItem.init();
  interactions.init();
  dragDrop();  
}



component();
