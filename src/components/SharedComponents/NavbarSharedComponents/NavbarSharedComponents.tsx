// NavbarSharedComponents.tsx
import { useSidebar } from "../../../context/SidebarContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "../../../../BBDD/useAuthState";
import { logoutUser } from "../../../../BBDD/auth";
import { NavbarContainer } from "./NavbarSharedComponents.style";

export function NavbarSharedComponents() {
  const { toggleSidebar } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useAuthState();
  
  async function handleLogin() {
    if (user) {
      await logoutUser();
      navigate("/");
    } else {
      if (location.pathname === "/") {
        toggleSidebar();
      } else {
        navigate("/");
      }
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
        <button onClick={handleLogin}>
          {user ? "LOGOUT" : "START"}
        </button>
      </div>
    </NavbarContainer>
  );
}
