// if...else

let temperature = 37.4
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature >= 37 && temperature < 37.5

if(highTemperature) {
    console.log('Febre Alta')
} else if(mediumTemperature){
    console.log('Febre Moderada')
} else {
    console.log('Saudável')
}