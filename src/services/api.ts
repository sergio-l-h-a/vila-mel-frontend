import axios from "axios";

export const api = axios.create({
    baseURL: "https://vila-mel-backend.onrender.com",
});