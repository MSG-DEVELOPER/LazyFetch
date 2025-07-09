import { useState } from "react";
import { FormWrapper } from "./SidebarForms.style";
import { registerUser } from "../../../../../BBDD/authFunctions";
import ToastMessage from "../../../SharedComponents/ToastMessageSharedComponents/ToastMessageSharedComponents";

function SidebarFormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setToast(null);

    if (password !== confirmPassword) {
      setToast({ type: "error", message: "Passwords do not match." });
      return;
    }

    try {
      await registerUser(username, email, password);
      setToast({ type: "success", message: "Account created successfully." });
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error instanceof Error) {
        setToast({
          type: "error",
          message: "Register error: " + error.message,
        });
      } else {
        setToast({
          type: "error",
          message: "Register error: Unknown error occurred",
        });
      }
    }
  }

  return (
    <FormWrapper>
      <p className="intro-text">
        You need an account to use the fastest fetch in the world. It only takes
        one minute.
      </p>

      <p className="form-title">Create Account</p>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
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

export default SidebarFormRegister;
