// DemoLazyFetch.style.js

import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const DemoBox = styled.div`
  background-color: ${colors.secondary};
  border: 2px dashed ${colors.accent};
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 2rem;
  text-align: center;

  h3 {
    margin-bottom: 1.5rem;
    color: ${colors.accent};
  }

  button {
    padding: 0.75rem 2rem;
    background-color: ${colors.accent};
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 1.5rem;

    &:hover {
      background-color: ${colors.primary};
    }
  }
`;

export const ResultBox = styled.div`
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  min-height: 3rem;
  font-size: 1.1rem;
  color: #333;
`;

export const CodeBlock = styled.div`
  background-color: #1e1e1e;
  color: #dcdcdc;
  text-align: left;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;

  pre {
    margin: 0;
    font-size: 0.85rem;
  }
`;
