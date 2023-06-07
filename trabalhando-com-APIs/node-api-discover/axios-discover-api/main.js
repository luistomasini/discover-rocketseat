const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    }) 
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
    name: "Luis Tomasini",
    avatar: "https://avatars.githubusercontent.com/u/100858288?v=4",
    city: "Batatais"
}

const userUpdated = {
    name: "Zé do Caneco",
    avatar: "https://picsum.photos/200/300",
    city: "Muzambinho"
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(3)

getUsers()
getUser(2)

// updateUser(3, userUpdated)
// addNewUser(newUser)

