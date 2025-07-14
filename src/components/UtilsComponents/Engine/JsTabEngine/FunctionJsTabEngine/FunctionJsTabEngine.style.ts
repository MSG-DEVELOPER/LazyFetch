import styled from "styled-components";
import { colors } from "../../../../../styles/colors";
export const Wrapper = styled.div`
  background: #fdfdfd;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

 h3 {
     color: ${colors.primary};
     font-size: 1.3rem;
     margin: 0 0 12px 0; 
   }
  .copied-message {
  
    margin-top: 8px;
    color: black;
    font-weight: 300;
  
  }
`;

export const CodeBox = styled.div`
  background: #f4f4f4;
  border-radius: 8px;
  padding: 16px;
  font-family: monospace;
  font-size: 0.9rem;
  color: #222;
  position: relative;
  white-space: pre-wrap;
  word-break: break-word;

  display: flex;
  align-items: flex-start;

  code {
    flex: 1;
  }
`;

export const CopyIcon = styled.span`
  margin-left: 12px;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  padding: 4px 6px;
  border-radius: 4px;
  background: #e0e0e0;
  transition: background 0.2s;

  &:hover {
    background: #ccc;
  }
`;
