import {setLocalStorage} from './status.js';

function dragDrop(){
   
   let elements = document.getElementsByTagName('li');
   let dragItem = null;
   let containers = document.querySelectorAll('.container');

   for(let i = 0;i<elements.length;i++){
       let element = elements[i];
       element.addEventListener('dragstart',(e)=>{
            dragItem = element;               
       }) 
       
       element.addEventListener('dragend',(e)=>{
         dragItem = null; 
       })
   }

   for(let i = 0;i < containers.length;i++){
    let container = containers[i];
       
    container.addEventListener('dragover',(e)=>{
         e.preventDefault();
    }) 
    
    container.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        
    })

    container.addEventListener('drop',(e)=>{        
        interchange(dragItem,container.firstElementChild)
        setLocalStorage();
    })
}

    function interchange(newElement,currentElement){
        let dragItem = newElement;
        let oldElement = currentElement;
        let parentDrag = dragItem.parentNode;
        let parentOld = oldElement.parentNode;

        parentDrag.appendChild(oldElement);
        parentOld.appendChild(dragItem);
        
    }

  
}
       
   


export {dragDrop};