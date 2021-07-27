import './style.css';

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
    const arr = Array.from(obj);
    arr.forEach((task) => {
      const childElement = `<li id="${task.index}"><input type="checkbox"><input type="text" class="text" value="${task.description}"><i class="fas fa-ellipsis-v"></i></li>`;
      ele.innerHTML += childElement;
    });
  }

  addList(objArr, element);
}

window.onload = component();