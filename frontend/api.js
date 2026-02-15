import axios from "axios";

const API = axios.create({
  baseURL: "https://my-portfolio-management-backend.onrender.com/api"
});

export default API;
