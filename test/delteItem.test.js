/**
 * @jest-environment jsdom
 */

const $  = require('jquery');


test('add test',()=>{
    document.body.innerHTML=`
    <span id="text"/>
    <button id="button"/>`;


    $('#button').click(()=>{
        add();
    });

 expect($('#text').text()).toEqual('Hello world');

})