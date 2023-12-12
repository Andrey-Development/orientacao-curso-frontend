import axios from "axios";

function getHost() {
  const url = new URL(window.location.href);
  return url.hostname;
}

const api = axios.create({
  baseURL: "https://orientation-plataform.onrender.com/",
  Host: "https://orientation-plataform.onrender.com/",
});

export default api;
