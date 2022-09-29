alert("Este pequeño ejemplo ordenará los dígitos de un número de menor a mayor");

const numero = prompt("Ingrese un número entero de 3 cifras o más. Por ejemplo: 467152...");

function esNumero(numero) {

  if(Number.isInteger(Number(numero))) {
    return true;
  }
  else {
    alert("El valor ingresado no es un número entero");
    return false;
  }

};

function esDeMasDeDosCifras(numero) {

    if (numero.length > 2){
        return true;
    }
    else {
        alert("El valor introducido es demaciado corto.")
        return false;
    }

};


function comparador(a,b) {

  return a-b;

}

function ordenarNumero(numero) {
  alert("Mostrar resultado...")
  return numero.split("").sort(comparador).join("");

};


function mostrarResultado(numero) {

  if(esNumero(numero)===true && esDeMasDeDosCifras(numero)===true) {
    return document.write(ordenarNumero(numero));
  }
  else {
    alert("Por favor, reinicie la página para volver a intentar")
  }
  
};


mostrarResultado(numero);