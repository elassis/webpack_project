import { setLocalStorage } from './status.js';

function interchange(newElement, currentElement) {
  const dragItem = newElement;
  const oldElement = currentElement;
  const parentDrag = dragItem.parentNode;
  const parentOld = oldElement.parentNode;

  parentDrag.appendChild(oldElement);
  parentOld.appendChild(dragItem);
}

function dragDrop() {
  const elements = document.getElementsByTagName('li');
  let dragItem = null;
  const containers = document.querySelectorAll('.container');
  let i = 0;
  let j = 0;
  while (i < elements.length) {
    const element = elements[i];
    /* eslint-disable */
    element.addEventListener('dragstart', () => {
      dragItem = element;
    });
      /* eslint-disable */
    element.addEventListener('dragend', () => {
      dragItem = null;
    });
    /* eslint-disable */
    i++;
  }

  while (j < containers.length) {
    const container = containers[j];
  /* eslint-disable */
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  /* eslint-disable */
    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });
  /* eslint-disable */
    container.addEventListener('drop', (

    ) => {
      interchange(dragItem, container.firstElementChild);
      setLocalStorage();
    });
    /* eslint-disable */
    j++;
  }
}
  /* eslint-disable */
export { dragDrop };