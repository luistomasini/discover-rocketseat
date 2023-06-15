/* 
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}
const luis = new Person("Luis")
const joao = new Person("João")
console.log(luis.walk())
console.log(joao.walk())
