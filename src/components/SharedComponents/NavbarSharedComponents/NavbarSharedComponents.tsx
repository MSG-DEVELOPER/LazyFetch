// NavbarSharedComponents.jsx
import { useSidebar } from "../../../context/SidebarContext";
import { useLocation } from "react-router-dom";

import { NavbarContainer } from "./NavbarSharedComponents.style";

export function NavbarSharedComponents() {
  const { toggleSidebar } = useSidebar();
  const location = useLocation();

  function handleLogin() {
    if (location.pathname === "/") {
      toggleSidebar();
    } else {
      alert("debe deslogarte y cambiar la apariencia , NavbarShared linea 15");
    }
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
