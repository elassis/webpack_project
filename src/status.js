function status(){
  const elements = document.getElementsByClassName('check');
     
   for(let i = 0;i<elements.length;i++){
       elements[i].addEventListener('change',function(){
           setLocalStorage();
        })      
    }
    if(localStorage.getItem('lists')){
        setStyle(localStorage.getItem('lists'));
    }

  
}

function setStyle(json){
    const inputs = document.getElementsByClassName('text');
    const chks = document.getElementsByClassName('check');
    const obj = JSON.parse(json);
    
    obj.forEach(element => {
        if(element.checked === true){
            inputs[element.index].classList.add('done');
            chks[element.index].checked = true;
        }else{
            inputs[element.index].classList.remove('done');
        }
    });
    
}

function setLocalStorage(){
    let arr = [];
    localStorage.clear();
    let elements = document.getElementsByClassName('check');
    let containers = document.getElementsByTagName('li');
    for(let i = 0;i<elements.length;i++){
      let obj = {
          index:i,
          checked:elements[i].checked,
          description:containers[i].children[1].value         
      }
      arr.push(obj);
    }
    localStorage.setItem('lists',JSON.stringify(arr));
    setStyle(localStorage.getItem('lists'));
}

export {status,setLocalStorage}; 