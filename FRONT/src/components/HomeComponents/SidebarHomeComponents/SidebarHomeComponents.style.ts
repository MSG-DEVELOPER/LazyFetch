// SidebarHomeComponents.style.ts
import styled from "styled-components";

interface SidebarProps {
  $open: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 70px; /* Ajusta esto según la altura de tu navbar */
  right: 0;
  width: 300px;
  height: calc(100vh - 70px); /* Para no tapar la navbar */
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(50px);
  color: #fff;

  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 999; /* Debajo de la navbar */
  padding: 20px;
`;
