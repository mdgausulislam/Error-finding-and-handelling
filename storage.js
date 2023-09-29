localStorage.setItem('userId',8795214)

const addToLocalStorage=()=>{
    const idInput=document.getElementById('storage-Id');
    const id=idInput.value;
    const valueInput=document.getElementById('storage-value');
    const value=valueInput.value;

  if(id && value ){
    localStorage.setItem(id,value);
  }
    idInput.value=' ';
    valueInput.value='';
}