import { status, setLocalStorage, setStyle } from './status.js'

function add(container){

    let input = document.querySelector('.input');
    let ObjArr = [];
    
    document.addEventListener('keyup',function(e){
        if(e.key == 'Enter' && input !== null){
            let obj = {
                index:ObjArr.length + 1,
                description:input.value,
                completed:false
            }
            ObjArr.push(obj);
            console.log(ObjArr);
            input.value ='';
            container.innerHTML ='';

            ObjArr.forEach((task)=>{
                const childElement = `<div class="container">
                                        <li draggable="true" id="${task.index}">
                                          <input class="check" type="checkbox">
                                          <input type="text" disabled class="text" value="${task.description}">
                                          <i class="fas fa-ellipsis-v"></i>
                                        </li>
                                      </div>
                                `;
                                
                 container.innerHTML += childElement;
            })

        }
        status();
       
    })
}

export { add }