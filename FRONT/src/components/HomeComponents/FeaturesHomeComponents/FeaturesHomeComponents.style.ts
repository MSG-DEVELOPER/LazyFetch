import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 40vw;

   > div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    background-color: ${colors.accent};
    color: ${colors.secondary};
    padding: 1.25rem;
    border-radius: 0.75rem;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    img {
      width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 0;
    }

    h2 {
      font-size: 1.25rem;
      margin: 0;
    }

    p {
      font-size: 1rem;
      margin: 0.25rem 0 0;
      color: ${colors.secondary};
    }

     &:hover {
      transform: translateY(-0.375rem);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25); 
    }
  }





`;
