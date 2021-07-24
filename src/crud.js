import { status, setLocalStorage, updateLS } from './status.js';
import { dragDrop } from './dragDrop.js';

function showItems(arrObj, container) {
  arrObj.forEach((task) => {
    const classAssigned = (task.completed) ? 'text done' : 'text';
    const checked = (classAssigned === 'text done') ? 'checked' : '';
    const childElement = `<div class="container">
                                <li draggable="true" id="${task.index}">
                                  <input id="${task.index}"class="check" ${checked} type="checkbox">
                                  <input id="text-${task.index}" type="text" class="${classAssigned}" value="${task.description}">
                                  <i class="fas fa-trash-alt"></i>
                                  <i class="fas fa-ellipsis-v"></i>
                                </li>
                              </div>
                        `;

    container.innerHTML += childElement;
  });
}

function add(container) {
  const objArr = (localStorage.length === 0) ? [] : Array.from(JSON.parse(localStorage.getItem('lists')));

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && e.target.id === 'main-input' && e.target.value !== '') {
      const obj = {
        index: objArr.length + 1,
        description: e.target.value,
        completed: false,
      };
      objArr.push(obj);
      e.target.value = '';
      container.innerHTML = '';
      setLocalStorage(objArr);
      showItems(objArr, container);
      status();
    } else if (e.key === 'Enter' && e.target.id !== 'main-input' && e.target.value !== '') {
      const idTochangeInObject = parseInt(e.target.parentNode.id, 10);
      const inputValue = e.target.value;
      updateLS(inputValue, idTochangeInObject);
    }
    dragDrop();
  });
  showItems(objArr, container);
  status();
}

function deleteItem() {
  document.addEventListener('click', (e) => {
    if (e.target.classList[1] === 'fa-trash-alt') {
      const parent = e.target.parentNode;
      const li = parent.parentNode;
      const ul = li.parentNode;
      // grab element id
      const elementId = parseInt(parent.id, 10);
      ul.removeChild(li);
      const arrLS = Array.from(JSON.parse(localStorage.getItem('lists')));
      // number to start

      // create new array of the elements without the id erased
      const arrayToSave = arrLS.filter((object) => object.index !== elementId);

      // set the new indexes to the array
      arrayToSave.forEach((object, i) => {
        object.index = i + 1;
      });
      localStorage.clear();
      setLocalStorage(arrayToSave);
    } else if (e.target.matches('button')) {
      const elements = document.getElementsByTagName('ul');
      // create an array of the child elements
      const childArray = Array.from(elements[0].children);
      childArray.forEach((child) => {
        elements[0].removeChild(child);
      });
      localStorage.clear();
    }
  });
}

export { add, deleteItem };