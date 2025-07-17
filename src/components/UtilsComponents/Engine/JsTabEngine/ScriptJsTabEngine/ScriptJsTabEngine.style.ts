import styled from "styled-components";
import { colors } from "../../../../../styles/colors";

export const Wrapper = styled.div`
  width: 90%;
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
 

  h3 {
    color: ${colors.primary};
    font-size: 1.3rem;
    margin: 0 0 0.9rem 0; 
  }

  h2{
     color: ${colors.primarySoft};
    font-size: 1rem;
    margin: 0 0 0.9rem 0; 
  }

  .copied-message {
    margin-top: 0.6rem;
    color: black;
    font-weight: 300;
  }
`;

export const CopyBox = styled.div`
  background: ${colors.secondarySoft};
  border-radius: 0.6rem;
  padding: 0.9rem 1.2rem;
  font-family: monospace;
  font-size: 1rem;
  color: #222;
 

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  user-select: none;

  width: 100%;

  
  code {
    user-select: text;
    overflow-wrap: anywhere;
    flex-grow: 1;
  }
`;

export const CopyIcon = styled.span`
  margin-left: 0.9rem;
  font-size: 1.3rem;
  user-select: none;
  flex-shrink: 0;
  cursor: pointer;
`;
