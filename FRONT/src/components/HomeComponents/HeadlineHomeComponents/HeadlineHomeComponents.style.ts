import styled, { keyframes } from "styled-components";
import { colors } from "../../../styles/colors";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeadlineStyle = styled.div`
  width: 100%;
  text-align: center;
  padding: 9rem 1rem 1rem;
  background-color: ${colors.secondary};

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: ${colors.primary};
    letter-spacing: 0.05em;
    animation: ${fadeInUp} 1s ease-out;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
