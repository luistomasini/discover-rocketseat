import axios from "axios";

axios.get("https://api.github.com/users/luistomasini").then((res) => {
  console.log(res.data);
});