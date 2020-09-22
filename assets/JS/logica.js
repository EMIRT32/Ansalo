const teclaA = document.getElementById('a').value;
const teclaB = document.getElementById('b').value;
const teclaC = document.getElementById('c').value;
const teclaD = document.getElementById('d').value;
const teclaE = document.getElementById('e').value;
const teclaF = document.getElementById('f').value;
const teclaG = document.getElementById('g').value;
const teclaH = document.getElementById('h').value;
const teclaI = document.getElementById('i').value;
const teclaJ = document.getElementById('j').value;
const teclaK = document.getElementById('...').value;
const teclaL = document.getElementById('rst').value;
const arregloTeclas = [
    teclaA,
    teclaB,
    teclaC,
    teclaD,
    teclaE,
    teclaF,
    teclaG,
    teclaH,
    teclaI,
    teclaJ

]
//la función tecla me permite guardar el valor del input con id letra y almacenarlo 
// para luego esa variable sumarle el id del botón que se orpime a través de un parametro que es su value

function tecla(valor) {
    let elemento = document.getElementById("letra");
    console.log(elemento);
    let val = elemento.value;
    console.log(val);
    if ( val == '' ){
        console.log('hola');
        if (val == 'a'){
            console.log('hola');
        }
    }

    for (let i = 0; i < arregloTeclas.length; i++) {
        if (valor == arregloTeclas[i] ) {
            console.log("parametro" + valor);
            console.log("campo" + val);
            elemento.value = val + valor;
        }
    }

    
    /* 
   if(valor == teclaB){
     elemento.value = val+valor;
  } if (valor == teclaC){
     elemento.value = val+valor;
  }
  
  else {
     swal("En orden!", "debes oprimir en orden!", "error")
  }*/

}
function teclaRst() {
    let elemento = document.getElementById("letra");
    let val = elemento.value;
    elemento.value = " ";
}





/*
function tecla() {
    for (let i = 0; i < arregloTeclas.length; i++) {
        console.log(arregloTeclas[i]);
    }
    if (teclaA == "a"){
        //console.log(teclaA);
        document.getElementById('letra').value = teclaA;
        }

    if (teclaB == "b"){
        document.getElementById('letra').value = teclaA + teclaB;

    }
}
function teclarA(){
    if( teclaA == 'a'){
        document.getElementById('letra').value = teclaA;
    }
}
const letras = document.getElementById('letra')
function teclarB(){
    if( letras == " "){
        document.getElementById('letra').value = teclaA;
        console.log(teclaA);
    }

}
*/
/*
let teclaPrueba = document.getElementById('a');
teclaPrueba.addEventListener('click', ()=>{
    if(teclaPrueba== a){
       teclaPrueba = JSON.stringify(teclaPrueba);
        document.getElementById('letra').value = teclaPrueba;
        console.log(typeof(teclaPrueba));
    }
})*/

//temas
const dark = document.getElementById('dark');
const light = document.getElementById('light');


dark.addEventListener('click', tema=>{
    container.className = "container dark"
   // document.getElementById('container').classList.add('dark');
    localStorage.setItem('tema', 'dark');
});
light.addEventListener('click', tema=>{
    container.className = "container light"
   // document.getElementById('container').classList.remove('dark');
    localStorage.setItem('tema', 'light');
});



const temaEnStorage = ()=>{
    const temaGuardado = localStorage.getItem('tema') ;
    if (temaGuardado == 'dark'){
        
        container.classList.add('dark');
    } else if (temaGuardado == 'light'){
        container.className = 'container';
        //container.classList.remove('dark');
    } else if (temaGuardado == 'pink'){
        container.classList.add('pink');
    }
    console.log(temaGuardado);
}
temaEnStorage();
