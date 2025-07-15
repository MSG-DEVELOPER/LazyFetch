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
      <div className="center">
        <h1>
          WELCOME TO <span className="highlight">LAZYFETCH®</span>
        </h1>
      </div>

      <div className="right">
  {user ? (
        <button onClick={handleLogin}>LOGOUT</button>

  
  ) : (  <button className="profile-button" onClick={handleLogin}>
      <img src="/icon.svg" alt="User icon" />
    </button>

  )}
</div>

    </NavbarContainer>
  );
}
