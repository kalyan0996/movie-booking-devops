import axios from "axios";

const API = axios.create({
  baseURL: "http://13.202.138.193:5000/api"
});

export default API;
