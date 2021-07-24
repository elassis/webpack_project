import { setLocalStorage } from './status.js';

function interchange(newElement, currentElement) {
  const dragItem = newElement;
  const oldElement = currentElement;
  const parentDrag = dragItem.parentNode;
  const parentOld = oldElement.parentNode;

  parentDrag.appendChild(oldElement);
  parentOld.appendChild(dragItem);
}

function reOrderLS() {
  const elements = document.getElementsByTagName('li');
  const arrElements = Array.from(elements);
  const arrObj = [];

  arrElements.forEach((element) => {
    const obj = {
      index: parseInt(element.id, 10),
      description: element.children[1].value,
      completed: element.children[0].checked,
    };
    arrObj.push(obj);
  });

  localStorage.clear();
  setLocalStorage(arrObj);
}

function dragDrop() {
  const elements = document.getElementsByTagName('li');
  const arrElements = Array.from(elements);
  const containers = document.querySelectorAll('.container');
  const arrContainers = Array.from(containers);
  let dragItem = null;

  arrElements.forEach((element) => {
    element.addEventListener('dragstart', () => {
      dragItem = element;
    });

    element.addEventListener('dragend', () => {
      dragItem = null;
    });
  });

  arrContainers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });

    container.addEventListener('drop', (

    ) => {
      interchange(dragItem, container.firstElementChild);
      reOrderLS();
    });
  });
}
/* eslint-disable */
export { dragDrop };