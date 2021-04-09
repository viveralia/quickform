// import axios from "axios";

export const logIn = async ({ email, password }) => {
  // 1. Construir la URL
  const baseUrl = "http://localhost:5000";
  const endpoint = "/login";
  const finalUrl = baseUrl + endpoint;

  // 2. Hacer petición a la URL (enviar datos: POST)
  // GET: Leer datos
  // POST: Enviar datos
  // PUT: Actualizar datos
  // DELETE: Borrar datos
  const response = await fetch(finalUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();

  // Con axios el equivalente sería:
  // return axios.post(finalUrl, { email, password });
};
