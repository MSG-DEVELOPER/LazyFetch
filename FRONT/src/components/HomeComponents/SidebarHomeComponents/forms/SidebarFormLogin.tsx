import { FormWrapper } from "./SidebarForms.style";

function SidebarFormLogin() {
  return (
    <FormWrapper>
      <h3>Sign in</h3>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </FormWrapper>
  );
}

export default SidebarFormLogin;
