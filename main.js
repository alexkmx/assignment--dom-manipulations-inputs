// document.querySelector("#reset-field button").addEventListener('click',function(){
//   // TASK #1
//   var llamarCajaDeTexto = document.querySelector('#reset-field input')
//
// llamarCajaDeTexto.value = ''
//   var validateFieldInput = document.querySelector('#validate-field input')
//  })

////////////////////////////////  2  //////////////////////////////////////////
// document.querySelector("#validate-field button").addEventListener('click',function(){
//   // TASK #2
//
// var cajaTex = document.querySelector('#validate-field input').value.length
// var mensaje = document.querySelector('.flash-message')
//
// if(cajaTex < 6) {
// mensaje.textContent = 'Input not long enough'
// mensaje.classList.add('invalid')
// mensaje.classList.remove('valid')
// } else {
// mensaje.textContent = 'Fiel Valid'
// mensaje.classList.add('valid')
// mensaje.classList.remove('invalid')
// }
// })

////////////////////////////////  3  //////////////////////////////////////////
// document.querySelector("#calculate-items button").addEventListener('click',function(){//Inicia funcion con cada click en boton Push Me
//   // TASK #3
//     var obtLisCarr = [...document.querySelectorAll('.cars-list input')]//Obtener lista de articulos y lo hago Array
//     var obtContador = document.querySelector('.sum-total')//Obtengo la etiqueta Span con el texto de Total $
//
//     var total = 0 //Creo una variable que guardará la suma de los articulos seleccionados
//
//   for(var i = 0; i < obtLisCarr.length; i++) { // Itero sobre los articulos
//
//     var articulos = obtLisCarr[i]// Creo una variable y le asigno el valor de los articulos iterados
//     var precio = parseInt(articulos.value)// creo una variable que tome el precio de los articulos con valor numero
//     var selectArt = articulos.checked// creo una varianle y les asigno valor booleano dependiendo si esta seleccionado o no
//
//   if(selectArt === true) {// Le digo que cada que encuentra un articulo con valor true en checkbox,
//     total += precio    //tome el precio y lo asigne a total
//     }
//   }
//     obtContador.textContent ='$' +total //Fuera de for, le regreso signo $ concatenado con el valor de la suma
//                                      //de los articulos seleccionados para que lo actualice en el viewport.
// })  //Termina funcion de click de Push Me

////////////////////////////////  4  //////////////////////////////////////////

// document.querySelector("#select-to-show-more button").addEventListener('click',function(){
//   // TASK #4
// var userType = document.querySelector('.selection') //Selecciono el menu de ociones
// var selected = userType.options[userType.selectedIndex]//le doy la ruta para accesar
// var printUserType = document.querySelector('.selected')//Le asigno las opciones
//
// var obtImg = selected.dataset.img
// var obtMake = selected.value
// var obtMSRP = selected.dataset.msrp
// var obtMpg = selected.dataset.mpg
// var obtEdm = selected.dataset.edmunds
//
// document.querySelector('.img-box').innerHTML= '<img src='+'"'+"./images/"+ obtImg +'"'+'>'
// document.querySelector('.model').textContent = obtMake
// document.querySelector('.msrp').textContent = obtMSRP
// document.querySelector('.mpg').textContent = obtMpg
// document.querySelector('.edmunds').textContent = obtEdm
// })

////////////////////////////////  5  //////////////////////////////////////////

document.querySelector('.entradas').focus()
document.querySelector('.entradas').addEventListener('keypress', function(event){

  var guestList = document.querySelector('.guest-list ')
    guestList.classList.add('guest')
  var getValue = document.querySelector('.entradas').value

if (event.keyCode === 13) { // If Enter key pressed         $(this).trigger('submit');     } });
// guestList.textContent += getValue
var node = document.createElement('Li')
var textNode = document.createTextNode(getValue)
node.appendChild(textNode)
document.querySelector('.guest-list').appendChild(node)


document.querySelector('.entradas').value = ""
}

})



////////////////////////////////  6  //////////////////////////////////////////
