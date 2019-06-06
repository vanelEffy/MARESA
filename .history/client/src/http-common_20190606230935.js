import axios from "axios";
 
export default axios.create({
  baseURL: "http://localhost:8080/api", // RestFull sur NodeJ
  headers: {
    "Content-type": "application/json",
  }
});