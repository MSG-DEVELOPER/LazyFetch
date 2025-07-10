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
    margin: 0 0 12px 0; /* margen abajo para separar del recuadro */
  }

  .copied-message {
    margin-top: 8px;
    color: black;
    font-weight: 300;
  }
`;

export const CopyBox = styled.div`
  background: ${colors.secondarySoft};
  border-radius: 6px;
  padding: 12px 16px;
  font-family: monospace;
  font-size: 16px;
  color: #222;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  user-select: none;

  width: 100%; /* ocupa todo el ancho posible */

  &:hover {
    background:${colors.accent};
  }

  code {
    user-select: text;
    overflow-wrap: anywhere;
    flex-grow: 1;
  }
`;

export const CopyIcon = styled.span`
  margin-left: 12px;
  font-size: 20px;
  user-select: none;
  flex-shrink: 0;
`;
