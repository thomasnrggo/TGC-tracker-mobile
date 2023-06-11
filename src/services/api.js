import axios from "axios";

// Create an instance of Axios
const api = axios.create({
  baseURL: "https://api.pokemontcg.io/v2", // Set the base URL for your API
  headers: {
    "x-api-key": process.env.API_KEY,
  },
});

export default api;
