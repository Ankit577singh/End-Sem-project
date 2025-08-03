import axios from "axios";

export const axios_instance = axios.create({
   baseURL: "https://api.themoviedb.org/3",
    params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY, // सुनिश्चित करें कि .env फाइल में यही नाम है
    language: 'en-US'
  },
   headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_AUTH_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
   },
});
