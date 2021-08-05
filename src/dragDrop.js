import ListItem from './crud.js';

function interchange(newElement, currentElement) {
  const dragItem = newElement;
  const oldElement = currentElement;
  const parentDrag = dragItem.parentNode;
  const parentOld = oldElement.parentNode;

  parentDrag.appendChild(oldElement);
  parentOld.appendChild(dragItem);
}

function reOrderLS(newElement, currentElement) {
  const arrLocalStorage = Array.from(JSON.parse(localStorage.getItem('lists')));
  //console.log(arrLocalStorage)
  let getIndexesInLocalStorage = (indexElementOne,indexElementTwo,arrObj) =>{
    let arrIndexes = [];
    //get the position of the element in the array
    arrObj.map((obj,i)=>{
      if(obj.index === indexElementOne){
        arrIndexes.push(i);
        console.log(indexElementOne)
      }
      if(obj.index === indexElementTwo){
        arrIndexes.push(i);
        console.log(indexElementOne)
      }
    });
    return arrIndexes;
  }
  

  console.log(getIndexesInLocalStorage(parseInt(newElement.firstChild.nextSibling.id),parseInt(currentElement.firstChild.nextSibling.id),arrLocalStorage));
  // const elements = document.getElementsByTagName('li');
  // const arrElements = Array.from(elements);
  // const arrObj = [];

  // arrElements.forEach((element) => {
  //   const obj = {
  //     index: parseInt(element.firstChild.nextSibling.id, 10),
  //     description: element.children[1].value,
  //     completed: element.children[0].checked,
  //   };
  //   arrObj.push(obj);
  // });

  // ListItem.setLocalStorage(arrObj);
}

export default function dragDrop() {
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
      reOrderLS(dragItem, container.firstElementChild);
    });
  });
}