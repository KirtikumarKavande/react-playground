import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  // timeout: 1000,
});

export default instance;
