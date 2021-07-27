function setStyle(json) {
  const inputs = document.getElementsByClassName('text');
  const chks = document.getElementsByClassName('check');
  const obj = JSON.parse(json);

  obj.forEach((element) => {
    if (element.checked === true) {
      inputs[element.index].classList.add('done');
      chks[element.index].checked = true;
    } else {
      inputs[element.index].classList.remove('done');
    }
  });
}
function setLocalStorage() {
  const arr = [];
  localStorage.clear();
  const elements = document.getElementsByClassName('check');
  const arrElements = Array.from(elements);
  const containers = document.getElementsByTagName('li');

  arrElements.forEach((element, i) => {
    const obj = {
      index: i,
      checked: element.checked,
      description: containers[i].children[1].value,
    };
    arr.push(obj);
  });
  localStorage.setItem('lists', JSON.stringify(arr));
  setStyle(localStorage.getItem('lists'));
}

function status() {
  const elements = document.getElementsByClassName('check');
  const arrElements = Array.from(elements);
  arrElements.forEach((element) => {
    element.addEventListener('change', () => {
      setLocalStorage();
    });
  });
  if (localStorage.getItem('lists')) {
    setStyle(localStorage.getItem('lists'));
  }
}

export { status, setLocalStorage };