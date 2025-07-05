// src/components/SidebarFormLogin.tsx
import { useState } from "react";
import { FormWrapper } from "./SidebarForms.style";
import { loginUser } from "../../../../../../BBDD/authFunctions";

function SidebarFormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const uid = await loginUser(email, password);
      console.log("User logged in:", uid);
      // Redirigir o mostrar el core
    } catch (error: any) {
      console.error("Login error:", error.message);
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
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </FormWrapper>
  );
}

export default SidebarFormLogin;
