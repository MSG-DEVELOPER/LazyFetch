import { useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { FormWrapper } from "./SidebarForms.style";
import { loginUser } from "../../../../../../BBDD/authFunctions";
import ToastMessage from "../../../SharedComponents/ToastMessageSharedComponents/ToastMessageSharedComponents"

function SidebarFormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const navigate = useNavigate(); 

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setToast(null);

    try {
      const uid = await loginUser(email, password);
      setToast({ type: "success", message: "Login successful" });
      setTimeout(() => {
        navigate("/core");
      }, 1500);
    } catch (error: any) {
      setToast({ type: "error", message: "Login error: " + error.message });
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

      {toast && (
        <ToastMessage
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </FormWrapper>
  );
}

export default SidebarFormLogin;
