const updateLS = (str, index) => {
  const arrLS = Array.from(JSON.parse(localStorage.getItem('lists')));
  // update localstorage object
  arrLS.forEach((object) => {
    // inside object elements start in 1
    if (object.index === index) {
      if (str === 'y') {
        object.completed = true;
      } else if (str === 'n') {
        object.completed = false;
      } else {
        object.description = str;
      }
    }
  });
  localStorage.clear();
  localStorage.setItem('lists', JSON.stringify(arrLS));
};

function setStyle(index) {
  // set the style to the input of the same node with same id
  const input = document.getElementById(`text-${index}`);

  if (input.classList.contains('done')) {
    input.classList.remove('done');
    updateLS('n', parseInt(index, 10));
  } else {
    input.classList.add('done');
    updateLS('y', parseInt(index, 10));
  }
}

function setLocalStorage(objArreglo) {
  localStorage.setItem('lists', JSON.stringify(objArreglo));
}

function status() {
  const checks = document.querySelectorAll('.check');
  const arr = Array.from(checks);
  arr.forEach((checkBox) => {
    checkBox.addEventListener('change', () => {
      setStyle(checkBox.id);
    });
  });
}

export {
  status, setLocalStorage, setStyle, updateLS,
};