// function scope

let subject;

function createThink(){
    subject = 'study'
    return subject
}

console.log(subject)
createThink()
console.log(subject)