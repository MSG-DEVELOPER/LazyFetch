import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const DivStyle = styled.div`
  width: 40vw;
  background-color: ${colors.secondary};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;

  .highligth {
    color: ${colors.accent};
    font-weight: 900;
  }

  h2 {
    font-size: 1.8rem;
    color: black;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  img {
    width: 37.5rem;
    height: 21.125rem;
    border-radius: 0.5rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.625rem 1.125rem;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #005fa3;
    }
  }
`;
