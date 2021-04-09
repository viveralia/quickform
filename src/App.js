// 1. Crear un formulario de log in
// 2. Validar los campos
// 3. Hacer la petición

import { useState } from "react";
import { logIn } from "./services/auth";

const App = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      // 1. Prevenimos que la página recargue por default
      e.preventDefault();
      // 2. Mostramos carga en la interfaz
      setIsLoading(true);
      // 3. Hacemos petición
      const backendSays = await logIn({
        email: credentials.email,
        password: credentials.password,
      });
      // 4. Dejamos de mostrar la carga en la interfaz
      setIsLoading(false);
      console.log(`backendSays`, backendSays);
      // 5. Reiniciamos el formulario
      setCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      alert("Hubo un error, intenta de nuevo");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          required
          minLength={2}
          maxLength={50}
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={credentials.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          required
          minLength={2}
          maxLength={50}
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={credentials.password}
        />
      </div>
      <button disabled={isLoading} type="submit">
        {isLoading ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
};

export default App;
