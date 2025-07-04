import { NavbarContainer } from "./NavbarSharedComponents.style";

export function NavbarSharedComponents() {
  return (
    <NavbarContainer>
      <div>
        <h1>WELCOME TO LAZYFETCH®</h1>
      </div>
      <div>
        <button>
          <img src="/icon.svg" alt="Botón" />
        </button>
      </div>
    </NavbarContainer>
  );
}
