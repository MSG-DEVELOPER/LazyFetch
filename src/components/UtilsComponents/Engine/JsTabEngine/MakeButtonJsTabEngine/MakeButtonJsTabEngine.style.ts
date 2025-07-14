import styled from "styled-components";
import { colors } from "../../../../../styles/colors";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;

  .left,
  .right {
    width: 45%;
  }

 h3 {
    color: ${colors.primary};
    font-size: 1.3rem;
    margin: 0 0 12px 0; 
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    color: #222; /* ✅ fuerza el color de texto */

    input[type="text"],
    input[type="color"] {
      padding: 6px 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    hr {
        border: none;
      border-bottom: 1px solid #ccc;
      box-shadow: 1px 1px 5px;
      margin: 2rem 0;
    }
  }

  pre {
    background: ${colors.secondarySoft};
    padding: 10px;
    font-size: 14px;
    white-space: pre-wrap;
    border-radius: 6px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08);
    color: black;
  }
`;

export const PreviewButton = styled.button<{ $padding: string; $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  padding: ${(props) => props.$padding};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  width: fit-content;
  align-self: start;
`;

export const CopyButton = styled.button`
  margin-top: 10px;
  background-color: ${colors.primarySoft};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  transition:  0.4s;

  &:hover {
    background-color: ${colors.primary};
    transform: scale(1.1);
  }
`;

