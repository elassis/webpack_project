const LocalStorage = window.localStorage;

export default class ListItem {
  static list = [];

  constructor(description, index = null, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  // check if there's elements in localstorage
  static init() {
    if (LocalStorage.getItem('lists')) {
    // if there is elements in the localstorage renders it in the window
      const arrLS = Array.from(JSON.parse(LocalStorage.getItem('lists')));
      this.render(arrLS);
    } else {
      localStorage.setItem('lists', '[]');
    }
  }

  static addItem(value) {
    const item = new ListItem(value);

    if (localStorage.length > 0) {
      const arrNew = Array.from(JSON.parse(localStorage.getItem('lists')));
      item.index = arrNew.length + 1;
      arrNew.push(item);
      this.setLocalStorage(arrNew);
    } else {
      item.index = 1;
      this.list.push(item);
      this.setLocalStorage(this.list);
    }
  }

  static render(array) {
    const ulElement = document.querySelectorAll('#parent');
    ulElement[0].innerHTML = '';
    array.forEach((item) => {
      const value = (item.completed === true) ? 'checked' : '';
      const classToShow = (value === 'checked') ? 'text done' : 'text';
      const child = `<div class="container">
                    <li draggable="true">
                      <input id="${item.index}" ${value} type="checkbox" class="check" id="">
                      <input class="${classToShow}" type="text" value="${item.description}">
                      <i class="fas fa-trash-alt"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </li>
                  </div>`;
      ulElement[0].innerHTML += child;
    });
  }

  static editItem(index, mssg,arrLS) {    
    arrLS.forEach((item) => {
      if (item.index === index) {
        item.description = mssg;
      }
    });
    this.setLocalStorage(arrLS);
  }

  static deleteItem(index) {
    const arrLS = Array.from(JSON.parse(LocalStorage.getItem('lists')));
    // delete element that match with the index and saves the array in a new one
    const newArr = arrLS.filter((object) => object.index !== index);

    newArr.forEach((object, i) => {
      // giving new index to all elements
      object.index = i + 1;
    });
    this.setLocalStorage(newArr);
  }

  static deleteAllCompleted() {
    const arrLS = (LocalStorage.length > 0) ? Array.from(JSON.parse(LocalStorage.getItem('lists'))) : [];
    if (arrLS.length > 0) {
      const newArr = arrLS.filter((object) => object.completed !== true);
      newArr.forEach((object, i) => {
        // giving new index to all elements
        object.index = i + 1;
      });
      this.setLocalStorage(newArr);
    }
  }

  static resetList() {
    const arrLS = (LocalStorage.length > 0) ? Array.from(JSON.parse(LocalStorage.getItem('lists'))) : [];
    if (arrLS.length > 0) {
      LocalStorage.clear();
      LocalStorage.setItem('lists', '[]');
    }
  }

  static setLocalStorage(arr) {
    localStorage.clear();
    localStorage.setItem('lists', JSON.stringify(arr));
  }
}
