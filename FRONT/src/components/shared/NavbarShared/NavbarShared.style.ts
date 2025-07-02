import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const NavbarContainer = styled.header`
  width: 100vw;
  box-sizing: border-box;
  height: 3.75rem; 
  background-color: ${colors.primary}; /* #1F1F1F */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem; 
  color: ${colors.secondary}; /* #E5E5E5 */
  overflow-x: hidden;
`;

export const Spacer = styled.div`
  width: 2.5rem; 
`;

export const Title = styled.h1`
  font-size: 1.875rem; 
  font-weight: 700;
  text-align: center;
  flex: 1;
`;

export const RightSection = styled.div`
  width: 3.125rem; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoButton = styled.button`
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
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
