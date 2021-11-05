//primero declaramos las variables a utilizar en el algoritmo
//algoritmos

//estructura de camello, despues de la primera palabra va en mayuscula el comienzo

function operacionesBasicas() {

    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var multi = 0;
    var divi = 0;

    //solicitanos las variables y los asignamos a las variables a y b
    //a travez de la funcion prompt

    A = parseFloat(prompt("Por favor ingrese el primer valor"));
    B = parseFloat(prompt("Por favor ingrese el segundo valor"));
    //el parseFloat convierte esa cadena de texto en numeros,
    // se dice que convierta lo que escriba el usuario en numeros enteros y decimales 


    //realizamos las operaciones del algoritmo 

    suma = A + B;
    resta = A - B;
    multi = A * B;
    divi = A / B;

    alert("El resultado de la suma es: " + suma );
    alert("El resultado de la resta es: " + resta );
    alert("El resultado de la multi es: " + multi );
    alert("El resultado de la divi es: " + divi );

}


function promedio() {
    //el promedio se calcula al sumar
    // la cantidad de notas y dividir el resultado de esta suma en la cantidad de notas
    var nota1 = 0; 
    var nota2 = 0; 
    var nota3 = 0; 
    var nota4 = 0; 
    var nota5 = 0; 
    var promedio = 0;

    // utilizamos en parseFloat nuevamente 

    nota1 = parseFloat(prompt("Por favor ingrese la primera nota:"));
    nota2 = parseFloat(prompt("Por favor ingrese la segunda nota:"));
    nota3 = parseFloat(prompt("Por favor ingrese la tercera nota:"));
    nota4 = parseFloat(prompt("Por favor ingrese la cuarta nota:"));
    nota5 = parseFloat(prompt("Por favor ingrese la quinta nota:"));

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    // el if sirve para validar una condicion y se conoce como condicional 

    if ( promedio <= 2.9 ) {
        alert(" Reprobo, su promedio es de: " + promedio );
    }else {
        alert(" Aprobo, su promedio es de: " + promedio );
    }









}





function mayorDeDosNumeros() {

    var A = 0;
    var B = 0;

        A = parseFloat(prompt("Por favor ingrese el primer numero"));
        B = parseFloat(prompt("Por favor ingrese el segundo numero"));


        if ( A === B) {
            alert(" Son numeros iguales");
        } else if (A > B) {
            alert(A + " Es mayor que " + B);
        }
        else {
            alert(B + " Es mayor que " + A);
        }









}


function menorDeTresNumeros() {

    var A = 0;
    var B = 0;
    var C = 0;
    
    A = parseFloat(prompt(" Por favor ingrese el primer número "));
    B = parseFloat(prompt(" Por favor ingrese el segundo número "));
    C = parseFloat(prompt(" Por favor ingrese el tercer número "));
    
    if ((A == B) && (A == C)) {
        alert("Los números son iguales ");
    } else if ((A <= B ) && ( A <= C )) {
        alert( A + " Es el numero menor ");
    } else if ((B < A) && (B < C)){
        alert(B + " Es el numero menor");
    }else {
        alert(C + " Es el numero menor");
     } 
}





