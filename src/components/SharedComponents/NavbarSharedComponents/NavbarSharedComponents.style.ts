// NavbarSharedComponents.style.js
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
  justify-content: space-between;
  padding: 0 1.25rem;
  color: ${colors.secondary};

  .left {
    display: flex;
    align-items: center;
    

    .icon-button {
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
      transition: all 0.3s ease;

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

  .center {
   
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
    display: flex;
    gap: 0.75rem;
    margin-right: 2rem;
    flex-shrink: 0;

    button {
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
