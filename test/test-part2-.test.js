/**
 * @jest-environment jsdom
 */

import ListItem from '../src/crud.js';
import interactions from '../src/interactions.js';
import { reOrderLS } from '../src/dragDrop.js';

const mockLocalStorage = [
  {
    index: 1,
    description: 'task 1',
    completed: false,
  },
  {
    index: 2,
    description: 'task 1',
    completed: true,
  },
  {
    index: 3,
    description: 'task 1',
    completed: false,
  },
];

describe('updating values from interactions', () => {
  test('change the description property', () => {
    ListItem.editItem(3, 'task-modified', mockLocalStorage);
    const element = mockLocalStorage[2];
    expect(element.description).toMatch('task-modified');
  });

  test('change the completed property', () => {
    interactions.updateStatus(mockLocalStorage, 2, true);
    const element = mockLocalStorage[1];
    expect(element.completed).toBeTruthy();
  });

  test('change the index property', () => {
    document.body.innerHTML = `
    <ul>
      <div class="container">
        <li draggable="true">
          <input id="1" type="checkbox" class="check" id="">
          <input  type="text">
          <i class="fas fa-trash-alt"></i>
          <i class="fas fa-ellipsis-v"></i>
        </li>
      </div>
      <div class="container">
        <li draggable="true">
          <input id="2" type="checkbox" class="check" id="">
          <input  type="text">
          <i class="fas fa-trash-alt"></i>
          <i class="fas fa-ellipsis-v"></i>
        </li>
      </div>
    </ul>`;
    //  set an array of both html elements
    const arrLi = document.getElementsByTagName('li');
    //  execute drag and drop and change the values in the mock localStorage
    reOrderLS(arrLi[0], arrLi[1], mockLocalStorage);
    //  test if the value of the index is 2 instead of 1
    expect(mockLocalStorage[0].index).toEqual(2);
  });
});

describe('remove selected itemes', () => {
  test('clear all completed', () => {
    document.body.innerHTML = `
    <ul id="list">
      <div class="container">
        <li draggable="true">
          <input id="1" type="checkbox" class="check" id="">
          <input  type="text">
          <i class="fas fa-trash-alt"></i>
          <i class="fas fa-ellipsis-v"></i>
        </li>
      </div>
      <div class="container">
        <li draggable="true">
          <input id="2" 'checked' type="checkbox" class="check" id="">
          <input class="done" type="text">
          <i class="fas fa-trash-alt"></i>
          <i class="fas fa-ellipsis-v"></i>
        </li>
      </div>
    </ul>`;
    //  set an array of both html elements
    //  const liArr = document.getElementsByTagName('li');
    //  set a variable to get the array from the return value from the function
    // const result = ListItem.deleteAllCompleted(mockLocalStorage);

    expect(ListItem.deleteAllCompleted(mockLocalStorage)).toHaveLength(2);
  });
});
