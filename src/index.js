/* eslint-disable */
import _ from 'lodash';
import './style.css';
import {status} from './status.js';
import {dragDrop} from './dragDrop.js';

function component() {
  
  const objArr = [
    {
      description: 'Wash dishes',
      completed: false,
      index: 0,
    },
    {
      description: 'Clean bedroom',
      completed: false,
      index: 1,
    },
    {
      description: 'Make dinner',
      completed: false,
      index: 2,
    },
  ];
  const element = document.querySelector('.to-do-placeholder');

  function addList(obj, ele) {
    let arr = []
    if(localStorage.length === 0){
     arr = Array.from(obj);    
    }else{
      arr = Array.from(JSON.parse(localStorage.getItem('lists')));     
    }
    arr.forEach((task,i) => {
      const childElement = ` <div class="container">
                                <li draggable="true" id="${task.index}">
                                  <input class="check" type="checkbox">
                                  <input type="text" disabled class="text" value="${task.description}">
                                  <i class="fas fa-ellipsis-v"></i>
                                </li>
                              </div>
                            `;
      ele.innerHTML += childElement;
    });
  }
  addList(objArr, element);
  status();
  dragDrop()
}



document.body.appendChild(component());