import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  img {
    height: 2.5rem;
    width: auto;
    object-fit: contain;
    filter: brightness(0) invert(1); /* Por si son logos oscuros */
    opacity: 0.8;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      transform: scale(1.3);
      opacity: 1;
    }
  }
`;
