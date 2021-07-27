import { setLocalStorage } from './status.js';

function interchange(newElement, currentElement) {
  const dragItem = newElement;
  const oldElement = currentElement;
  const parentDrag = dragItem.parentNode;
  const parentOld = oldElement.parentNode;

  parentDrag.appendChild(oldElement);
  parentOld.appendChild(dragItem);
}

export default function dragDrop() {
  const elements = document.getElementsByTagName('li');
  const arrElements = Array.from(elements);
  let dragItem = null;
  const containers = document.querySelectorAll('.container');
  const arrContainers = Array.from(containers);

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
      setLocalStorage();
    });
  });
}
