import axios from "axios";

axios
 .get("https://api.github.com/users/luistomasini")
 .then((res) => axios.get(res.data.repos_url))
 .then (repos => console.log(repos.data))
 .catch(error => console.log(error))