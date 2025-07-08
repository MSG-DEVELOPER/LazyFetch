import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`;

export const Header = styled.div`
  padding: 16px 20px;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: white;
   border-bottom: 1px solid rgba(0, 0, 0, 0.5); 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);   
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 1.5rem;
    color: ${colors.accent};
  }
`;

export const Grid = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  overflow-y: auto;
`;
