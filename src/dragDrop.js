import {setLocalStorage} from './status.js';
function dragDrop(){
   let containers = document.getElementsByClassName('container');
   let elements = document.getElementsByTagName('li');
   for(let i = 0; i < containers.length; i++){
    containers[i].addEventListener('dragenter',function(e){
       //change value of object when drag
        positionObj[i] = true;
        console.log(positionObj)
    })
   }


let positionObj = {
    0:false,
    1:false,
    2:false,
}

for(let i = 0; i< elements.length; i++){
    elements[i].addEventListener('dragend',function(){
        interchange(i);
    })
    
}

function interchange(idDraggedElement){
  let i = 0,objectSize = Object.keys(positionObj).length;
  let childs = document.getElementsByTagName('li');
  let containers = document.getElementsByClassName('container');
  let childToMove = childs[idDraggedElement];
  let currentChild ='';
  while(i < objectSize){
      if(positionObj[i]=== true && idDraggedElement !== i){
          console.log('container '+ i);
          currentChild = childs[i];
        //   console.log(currentChild.children[1].value)
          containers[i].removeChild(currentChild);
          containers[idDraggedElement].removeChild(childToMove);
          containers[i].appendChild(childToMove);
          containers[idDraggedElement].appendChild(currentChild);  
          
      }
      i++;
  }

  //reset the object
  for(let index in positionObj){
      positionObj[index]=false;
  }
  setLocalStorage();
  console.log(positionObj)
}
       
   
}

export {dragDrop};