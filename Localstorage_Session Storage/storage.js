const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;

    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
     if(id && value){
        localStorage.setItem(id, value);
     }
   

    idInput.value = '';
    valueInput.value = ''; // Corrected the issue here
}

/*
console.log("Hello every ONe");
let imarray = ['abir','tosher', 'Faisal']

localStorage.setItem('name','abir')
localStorage.setItem('nam2','Nahian')
localStorage.setItem('arr',JSON.stringify(imarray));

localStorage.getItem('name')
let a = JSON.parse(localStorage.getItem('arr'))

localStorage.clear()
localStorage.removeItem('name')


sessionStorage-> getItem,setItem,clear(),removeItem() same as work in localStorage. */