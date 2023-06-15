// 1. Declare uma variável
let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

// let  name = "Luis"
// let  age = 34
// let  stars = 17.5
// let  isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dado?
    // Objeto

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: "Luis",
    age: 34,
    weight: 100.5,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = [];

/* 
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [student]

/* 
    7. Coloque no console o valor zero da posição do Array acima
*/

console.log(students[0])

/* 
    Crie um novo student e coloque na posição 1 do Array students
*/

const student2 = {
    name: 'Pedro',
    age: 31,
    weight: 70,
    isSubscribed: false
}

students.push(student2)

console.log(students)

/* 
    Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

console.log(a)
var a = 1


