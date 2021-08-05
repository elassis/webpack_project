/**
 * @jest-environment jsdom
 */

import ListItem from '../src/crud.js';
import interactions from '../src/interactions.js';

const mockLocalStorage = [
  {
    index: 1,
    description: 'task 1',
    completed: false,
  },
  {
    index: 2,
    description: 'task 1',
    completed: false,
  },
  {
    index: 3,
    description: 'task 1',
    completed: false,
  },
];

test('change the description property',()=>{
    ListItem.editItem(3,'task-modified',mockLocalStorage);
    const element = mockLocalStorage[2];
    expect(element.description).toMatch('task-modified');
});

test('change the completed property',()=>{
    interactions.updateStatus(mockLocalStorage,2,true);
    const element = mockLocalStorage[1];
    expect(element.completed).toBeTruthy();
});