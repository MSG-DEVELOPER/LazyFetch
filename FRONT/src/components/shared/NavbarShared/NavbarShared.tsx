import { NavbarContainer, Spacer, Title, RightSection, LogoButton } from "./NavbarShared.style";

export function NavbarShared() {
  return (
    <NavbarContainer>
      <Spacer /> 
      <Title>BIENVENIDO A LAZYFETCH®</Title>
      <RightSection>
        <LogoButton>
          <img src="/logoLazyFetch.svg" alt="Botón" />
        </LogoButton>
      </RightSection>
    </NavbarContainer>
  );
}
