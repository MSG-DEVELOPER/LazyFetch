// NavbarSharedComponents.jsx
import { NavbarContainer } from "./NavbarSharedComponents.style";

export function NavbarSharedComponents() {
  function handleLogin() {
    alert("Login clicado");
  }

  

  return (
    <NavbarContainer>
      <div className="left">
        <button className="icon-button">
          <img src="/icon.svg" alt="Botón" />
        </button>
      </div>

      <div className="center">
        <h1>
          WELCOME TO <span className="highlight">LAZYFETCH®</span>
        </h1>
      </div>

      <div className="right">
        <button onClick={handleLogin}>START</button>
       
      </div>
    </NavbarContainer>
  );
}
