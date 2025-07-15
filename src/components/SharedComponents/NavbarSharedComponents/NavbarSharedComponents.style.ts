import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 3.75rem;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  color: ${colors.secondary};

  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    h1 {
      font-size: 1.875rem;
      font-weight: 700;

      .highlight {
        color: gold;
        font-weight: 900;
      }
    }
  }

 .right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-right: 2rem;

  .profile-button {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background-color: white; /* fondo blanco */
    border: none;
    padding: 0;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 80%;  /* La figura no ocupe todo el botón para que se note el borde blanco */
      height: 80%;
      object-fit: contain;
      filter: invert(0); /* Asegura que el icono se vea negro */
      display: block;
    }
  }

  button:not(.profile-button) {
    padding: 0.5rem 1rem;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.accent};
      transform: scale(1.05);
    }
  }
}


`;
