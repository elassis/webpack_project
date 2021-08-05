/**
 * @jest-environment jsdom
 */
import ListItem from '../src/crud.js';
import interactions from '../src/interactions.js';

const mockArray = [
    {
        index:1,
        description:'task 1',
        completed:false
    },
    {
        index:2,
        description:'task 1',
        completed:false
    },
    {
        index:3,
        description:'task 1',
        completed:false
    },
];
describe('test add and delete functions', () => {

    test('add items to the list ',()=>{
        document.body.innerHTML=`<ul id="parent"></ul>`
        ListItem.render(mockArray);
        const containers = document.querySelectorAll('.container');
        expect((containers)).toHaveLength(3);
    
    });

    test('delete item from list', () => {
        //set the element with two child elements
        document.body.innerHTML = `<ul id="parent">
                <div class="container">
                    <li draggable="true">
                        <input id="hello"  type="checkbox" class="check" id="">
                        <input class="class" type="text" value="no">
                        <i class="fa-trash-alt"></i>
                        <i class="fas fa-ellipsis-v"></i>
                    </li>
                </div>
                <div class="container">
                  <li draggable="true">
                    <input id="hello2"  type="checkbox" class="check" id="">
                    <input class="class" type="text" value="no">
                    <i class="fa-trash-alt"></i>
                    <i class="fas fa-ellipsis-v"></i>
                  </li>
                </div>
            </ul>`;
        //array of the  li elements inside the list
        const elements = document.getElementsByTagName('li');
        //array of the buttons that should be pressed to delete the list item
        const elementsToRemove = document.querySelectorAll('.fa-trash-alt');
        //call of the function that delete the function in this case we set to delete the first element of the array
        interactions.deleteHtmlItem(elementsToRemove[0]);
        //test if the length of the array of element has been reduce to only one element
        expect((elements)).toHaveLength(1);
    });
})


