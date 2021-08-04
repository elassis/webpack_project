/**
 * @jest-environment jsdom
 */
import ListItem from '../src/crud.js';

const mockArray = [
    {
        index:1,
        description:'task 1',
        completed:false
    },
    {
        index:2,
        description:'task 2',
        completed:false
    },
    {
        index:3,
        description:'task 3',
        completed:false
    }
];

test('populate HTML parent element with render function ',()=>{
    document.body.innerHTML=`<ul id="parent"></ul>`
    ListItem.render(mockArray);
    const parent = document.querySelectorAll('#parent');
    expect((parent)).toHaveLength(1);

});