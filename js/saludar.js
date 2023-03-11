// document.getElementById('nombre')
// .setAttribute('value','santiago');
document.getElementById('saludarBtn')
.addEventListener('click',() =>{
    let nombrePersona = document.getElementById('nombre').value;
    if(nombrePersona == ""||nombrePersona==null){
        alert('el campo no puede estar vacio');
    }else{
    alert('Hola '+ nombrePersona + ' !!!!');
    }
});