import ListItem from './crud.js';

const LocalStorage = (localStorage.length > 0) ? Array.from(JSON.parse(localStorage.getItem('lists'))) : [];

function interchange(newElement, currentElement) {
  const dragItem = newElement;
  const oldElement = currentElement;
  const parentDrag = dragItem.parentNode;
  const parentOld = oldElement.parentNode;

  parentDrag.appendChild(oldElement);
  parentOld.appendChild(dragItem);
}

function reOrderLS(newElement, currentElement, arrLocalStorage) {
  //  function to get the index values in the array
  function getIndexesInLocalStorage(indexElementOne, indexElementTwo, arrLocalStorage) {
    const arrIndexes = [];
    //  get the position of the element in the array
    arrLocalStorage.forEach((obj, i) => {
      if (obj.index === indexElementOne) {
        arrIndexes.push(i);
      }
      if (obj.index === indexElementTwo) {
        arrIndexes.push(i);
      }
    });
    return arrIndexes;
  }

  const indexes = getIndexesInLocalStorage(
    parseInt(newElement.firstChild.nextSibling.id, 10),
    parseInt(currentElement.firstChild.nextSibling.id, 10),
    arrLocalStorage,
  );

  const currentObject = {
    index: arrLocalStorage[indexes[0]].index,
    description: arrLocalStorage[indexes[0]].description,
    completed: arrLocalStorage[indexes[0]].completed,
  };

  const draggedObject = {
    index: arrLocalStorage[indexes[1]].index,
    description: arrLocalStorage[indexes[1]].description,
    completed: arrLocalStorage[indexes[1]].completed,
  };

  arrLocalStorage[indexes[0]].index = draggedObject.index;
  arrLocalStorage[indexes[0]].description = draggedObject.description;
  arrLocalStorage[indexes[0]].completed = draggedObject.completed;

  arrLocalStorage[indexes[1]].index = currentObject.index;
  arrLocalStorage[indexes[1]].description = currentObject.description;
  arrLocalStorage[indexes[1]].completed = currentObject.completed;

  ListItem.setLocalStorage(arrLocalStorage);
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

    container.addEventListener('drop', () => {
      reOrderLS(dragItem, container.firstElementChild, LocalStorage);
      interchange(dragItem, container.firstElementChild);
    });
  });
}

export { dragDrop, reOrderLS };