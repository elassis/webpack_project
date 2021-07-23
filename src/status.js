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
  const containers = document.getElementsByTagName('li');
  let i = 0;
  while (i < elements.length) {
    const obj = {
      index: i,
      checked: elements[i].checked,
      description: containers[i].children[1].value,
    };
    arr.push(obj);
    /* eslint-disable */
    i++;
  }
  localStorage.setItem('lists', JSON.stringify(arr));
  setStyle(localStorage.getItem('lists'));
}

function status() {
  const elements = document.getElementsByClassName('check');
  let i = 0;
  while (i < elements.length) {
    elements[i].addEventListener('change', () => {
      setLocalStorage();
    });
    /* eslint-disable */
    i++;
  }
  if (localStorage.getItem('lists')) {
    setStyle(localStorage.getItem('lists'));
  }
}

export { status, setLocalStorage, setStyle };