// for..in (loop em objeto - pegando propriedades do objeto)

let person = {
    name: 'John',
    age: 30,
    weight: 88.7
}

for (let property in person) {
    console.log(property)
    console.log(person['name'])
    console.log(person.name)
    console.log(person[property])
}