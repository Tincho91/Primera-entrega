alert("Este pequeño ejemplo ordenará los dígitos de un número de menor a mayor");

var numero = prompt("Ingrese un número entero");

function esNumero(numero){

  if(Number.isInteger(Number(numero))){
    return true;
  }
  else {
    alert("El valor ingresado no es un número entero");
    return false;
  }

};

function comparador(a,b){

  return a-b;

}

function ordenarNumero(numero){
  alert("Mostrar resultado...")
  return numero.split("").sort(comparador).join("");

};


function mostrarResultado(numero) {

  if(esNumero(numero)===true){
    return document.write(ordenarNumero(numero));
  }
  else {
    alert("Por favor, reinicie la página para volver a intentar")
  }
  
}

mostrarResultado(numero);