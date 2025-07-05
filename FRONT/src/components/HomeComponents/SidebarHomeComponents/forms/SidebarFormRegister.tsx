import { FormWrapper } from "./SidebarForms.style";

function SidebarFormRegister() {
  return (
    <FormWrapper>
      <p className="intro-text">
        You need an account to use the fastest API in the world. It only takes one minute.
      </p>

      <p className="form-title">Create Account</p>

      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </FormWrapper>
  );
}

export default SidebarFormRegister;
