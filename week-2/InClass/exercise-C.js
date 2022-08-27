const num= 15
function numberChecker(num) { //la funcion comprueba que el numero ingresado sea mayor que 20 
  if (num > 20) { //si el numero es mayor que 20 retorna is greater than 20
    return `${num} is greater than 20`;
  } else if (num === 20) {// si no comapara numero es igual a 20 retorna is equal to 20
    return `${num} is equal to 20`;
  } else if (num < 20) { // si no comapara numero es menos que 20 retorna is less than 20
    return `${num} is less than 20`;
  } else {// si no retorna isn't even a number
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker)