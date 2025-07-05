// src/components/SidebarFormRegister.tsx
import { useState } from "react";
import { FormWrapper } from "./SidebarForms.style";
import { registerUser } from "../../../../../../BBDD/authFunctions";

function SidebarFormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const uid = await registerUser(username, email, password);
      console.log("User registered:", uid);
      // Redirigir o mostrar el core
    } catch (error: any) {
      console.error("Register error:", error.message);
    }
  }

  return (
    <FormWrapper>
      <p className="intro-text">
        You need an account to use the fastest fetch in the world. It only takes one minute.
      </p>

      <p className="form-title">Create Account</p>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </form>
    </FormWrapper>
  );
}

export default SidebarFormRegister;
