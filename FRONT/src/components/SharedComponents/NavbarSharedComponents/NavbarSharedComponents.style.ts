import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const NavbarContainer = styled.header`
 position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  box-sizing: border-box;
  height: 3.75rem;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  color: ${colors.secondary};
  overflow-x: hidden;

  > div:first-child {
    flex: 1;
    text-align: center;

    h1 {
      font-size: 1.875rem;
      font-weight: 700;
    }
  }

  > div:last-child {
    width: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: ${colors.secondary};
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.1875rem;
      transition:
        background-color 0.3s ease,
        box-shadow 0.3s ease,
        transform 0.3s ease;

      &:hover {
        background-color: ${colors.accent};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
      }

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
`;
