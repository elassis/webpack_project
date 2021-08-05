import { dragDrop } from './dragDrop.js';
import ListItem from './crud.js';

const input = document.querySelector('#main-input');

function setLocalStorage(arr) {
  localStorage.clear();
  localStorage.setItem('lists', JSON.stringify(arr));
}

const interactions = {
  init: () => {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && e.target.matches('#main-input') && input.value !== '') {
        ListItem.addItem(input.value);
        ListItem.init();
        input.value = '';
      } else if (e.key === 'Enter' && e.target.matches('.text')) {
        const index = parseInt(e.target.parentNode.children[0].id, 10);
        const mssg = e.target.value;
        const arrLS = Array.from(JSON.parse(localStorage.getItem('lists')));
        ListItem.editItem(index, mssg,arrLS);
      }
      dragDrop();
    });
    interactions.checkCompleteTasks();
    interactions.checkItemToDelete();
  },
  checkCompleteTasks: () => {
    document.addEventListener('change', (e) => {
      const arrLS = Array.from(JSON.parse(localStorage.getItem('lists')));
      if (e.target.matches('.check')) {
        const index = parseInt(e.target.id, 10);
        const status = e.path[0].checked;
        if (status) {
          e.path[1].childNodes[3].classList.add('done');
          interactions.updateStatus(arrLS,index,true);
          // arrLS.forEach((item) => {
          //   if (item.index === index) { item.completed = true; }
          // });
          // setLocalStorage(arrLS);
        } else {
          e.path[1].childNodes[3].classList.remove('done');
          interactions.updateStatus(arrLS,index,false);
          // arrLS.forEach((item) => {
          //   if (item.index === index) { item.completed = false; }
          // });
          // setLocalStorage(arrLS);
        }
      }
    });
  },
  checkItemToDelete: () => {
    document.addEventListener('click', (e) => {
      if (e.target.className === 'fas fa-trash-alt') {
        const index = parseInt(e.target.parentNode.children[0].id, 10);
        // erase the element from the html
        interactions.deleteHtmlItem(e.target);
        
        // update the localStorage
        ListItem.deleteItem(index);
      } else if (e.target.matches('#clearAll')) {
        // bring all elements with the class done inside
        const elements = Array.from(document.getElementsByClassName('done'));
        if (elements.length > 0) {
          // delete all of them
          elements.forEach((element) => {
            const li = element.parentNode;
            const div = li.parentNode;
            const ul = div.parentNode;
            ul.removeChild(div);
          });
          // execute function in LS
          const arrLS = (localStorage.length > 0) ? Array.from(JSON.parse(localStorage.getItem('lists'))): [];
          ListItem.deleteAllCompleted(arrLS);
        }
      } else if (e.target.className === 'fas fa-sync') {
        const elements = Array.from(document.getElementsByClassName('container'));

        if (elements.length > 0) {
          // delete all of them
          elements.forEach((element) => {
            const ul = element.parentNode;
            ul.removeChild(element);
          });
          // execute function in LS
          ListItem.resetList();
        }
      }
    });
  },
  deleteHtmlItem: (element) => {
    const li = element.parentNode;
    const div = li.parentNode;
    const ul = div.parentNode;
    ul.removeChild(div);
  },
  updateStatus: (arrLS, index, state) => {
    arrLS.forEach((item) => {
     if (item.index === index) { item.completed = state; }
    });
    setLocalStorage(arrLS);
  }

};

export default interactions;
