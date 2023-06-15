# Async / Await

- Maneira de escrever promises
- Syntatic Sugar
  
```js
const promessa = new Promise( function (resolve, reject) {

    return resolve('ok')

})

async function start() {
    try{
        const result = await promessa
        console.log(result)
    } catch(e) {
        console.log(e)
    } finally {
        console.log('rodas sempre')
    }
}

start()

// promessa
//     .then(function(response){
//         console.log(response)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
//     .finally(function(){
//         console.log('sempre irei executar')
//     })
```
