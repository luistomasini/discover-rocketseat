/* ### Transformar notas escolares

Crie um algoritmo que transforma as notas do sistema
numérico para sistema de notas em caracteres tipo ABC

* de 90 para cima - A
* enre 80 e 89 - B
* entre 70 e 79 - C
* entre 60 e 69 - D
* menor que 60 - E

*/

function notas(notas) {
    let notaA = notas >= 90 && notas <= 100
    let notaB = notas >= 80 && notas <= 89
    let notaC = notas >= 70 && notas <= 79
    let notaD = notas >= 60 && notas <= 69
    let notaE = notas >= 0 && notas < 60

    let notaFinal;

    if(notaA) {
        notaFinal = "A"
    } else if (notaB){
        notaFinal = "B"
    } else if (notaB){
        notaFinal = "B"
    } else if (notaC){
        notaFinal = "C"
    } else if (notaD){
        notaFinal = "D"
    } else if (notaE){
        notaFinal = "E"
    } else {
        notaFinal = "Nota inválida"
    }

    return notaFinal
}

console.log(notas(101))
console.log(notas(-1))
console.log(notas(1))
console.log(notas(59))
console.log(notas(69))
console.log(notas(79))
console.log(notas(89))
console.log(notas(99))