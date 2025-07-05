// src/components/SidebarFormLogin.tsx
import { useNavigate } from "react-router-dom"; // <-- importa esto

import { useState } from "react";
import { FormWrapper } from "./SidebarForms.style";
import { loginUser } from "../../../../../../BBDD/authFunctions";

function SidebarFormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate(); // <-- hook para navegar


  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const uid = await loginUser(email, password);
      alert("Login exitoso, uid: " + uid);
      // Aquí redirige a la página core de tu app, por ejemplo:
       navigate("/core");
    } catch (error: any) {
      alert("Error al iniciar sesión: " + error.message);
    }
  }

  return (
    <FormWrapper>
      <h3>Sign in</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </FormWrapper>
  );
}

export default SidebarFormLogin;
