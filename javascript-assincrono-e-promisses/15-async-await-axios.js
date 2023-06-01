import axios from 'axios'

async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/luistomasini')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  } catch (error) {
    console.log(error)
  }

}

fetchRepos()