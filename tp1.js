//ejercicio 1
let nombre="Facundo"
let apellido= "Porra"
let edad= "28"
console.log("Hola,",nombre,apellido,".Tienes",edad, "años")

//ejercicio2
let persona= {nombre:"manuel",edad:"28",apellido:"pepelino"}
console.log("mi objeto persona es",JSON.stringify(persona))

//ejercicio 3
let num1=5;num2=10;num3=15; num4=20
console.log(num1+num2)
let num5=(num1+num2)
console.log(num4-num3)
let num6=(num4-num3)
console.log(num5*num6)
let resultadofinal=(num5*num6)
console.log(resultadofinal)
//ejercicio 3
let esPar=resultadofinal % 2 == 0
console.log(esPar)
/* “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
respuesta a verificar si el resultado final es par es: [esPar]” */
console.log("Mis variables iniciales fueron:", num1, num2, num3, "y", num4,".La respuesta a verificar si el resultado final es par es:",esPar)