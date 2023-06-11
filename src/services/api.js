import axios from "axios";

// Create an instance of Axios
const api = axios.create({
  baseURL: "https://api.pokemontcg.io/v2", // Set the base URL for your API
  headers: {
    "x-api-key": "e415e94a-efa3-4e48-bae3-88160134c596",
  },
});

export default api;
