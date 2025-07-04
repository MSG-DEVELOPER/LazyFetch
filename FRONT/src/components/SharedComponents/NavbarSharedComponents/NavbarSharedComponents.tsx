import { NavbarContainer } from "./NavbarSharedComponents.style";

export function NavbarSharedComponents() {
  return (
    <NavbarContainer>
      <div>
        <h1>BIENVENIDO A LAZYFETCH®</h1>
      </div>
      <div>
        <button>
          <img src="/logoLazyFetch.svg" alt="Botón" />
        </button>
      </div>
    </NavbarContainer>
  );
}
