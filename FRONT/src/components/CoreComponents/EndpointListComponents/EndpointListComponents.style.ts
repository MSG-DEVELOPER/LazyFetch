import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  width: 100%;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  overflow:auto;
border: solid 1px blue;
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
  top: 0;
  z-index: 10;
  background-color: white;

  h1 {
    font-size: 1.5rem;
    color: ${colors.accent};
    margin-bottom: 4px;
  }

  p {
    font-size: 0.85rem;
    color: ${colors.primary};
  }
`;

export const Grid = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  overflow-y: auto;
  border: 2px solid yellow;
`;
