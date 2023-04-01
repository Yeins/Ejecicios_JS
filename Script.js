//#1
function clima (estaLloviendo){
    if (estaLloviendo){
        console.log("si eta lloviendo")
    }
    else{
        console.log("No esta lloviendo")
    }
}
clima(false)



//#2
function calcular (num1,num2,num3){
    let sumar = num1 + num2;
    let resultado = sumar + num3;
    return resultado
}
console.log(calcular (2,3,4))



//#3
let base = parseInt(prompt("Ingrese base"));
let altura = parseInt(prompt("Ingrese altura"));
let area;
area = (base * altura)/2;
document.write("el resultado del area del triangulo es: "+area);



//#4
function promedio (){
    let nota1= parseInt(prompt("ingrese nota 1"))
    let nota2= parseInt(prompt("ingrese nota 2"))
    let nota3= parseInt(prompt("ingrese nota 3"))
    promedio = (nota1+nota2+nota3)/3
if (promedio>3){
    document.write("Aprobo con: "+promedio)
}
else{
    document.write("Reprobo con: "+promedio)
}

}
console.log(promedio(2,3,5))



//#5
function calculadora(){
    //Se crean 3 variables, 2 float y 1 string para luego formar el string operación en minúsculas.
    let nume1 = parseFloat(prompt("Ingrese el primer número a calcular"));
    let nume2 = parseFloat(prompt("Ingrese el segundo número a calcular"));
    let operacion = prompt("Qué operación deseas hacer? Suma( + ), Resta( - ), Multiplicacion( * ), Divicion( / ) o Potenciacion( ** )    ¡COLACAR EL SIMBOLO!");
    operacion.toLowerCase();
    //Switch con casos para realizar operación según el string.
    switch(operacion){
        case "+":
            return(nume1 + nume2);
        case "-":
            return(nume1 - nume2);
        case "*":
            return(nume1 * nume2);
        case "/":
            return(nume1 / nume2);
        case "**":
            return(nume1 ** nume2);
        default:
            return(" no se ha podido calcular por un error en el operando");
    }
}
document.write("El resultado de la calculadora es de: ")
document.write(calculadora())
