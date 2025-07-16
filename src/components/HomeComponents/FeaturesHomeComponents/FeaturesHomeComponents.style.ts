// FeaturesHomeComponents.style.js
import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Section = styled.section`
  padding: 2rem 1rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${colors.primarySoft};
  border-radius: 1rem;
`;

export const Heading = styled.h2`
 
    font-size: 1.8rem;
    color: white;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
  

  .highligth{
    color: ${colors.accent};
  }
`;

export const DivStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 40vw;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease;
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
    transition: transform 0.4s ease;
  }

  h2 {
    font-size: 1.4rem;
    margin: 0 ;
    padding-bottom: 1rem;
    color: ${colors.accent};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0.25rem 0 0;
    text-align:center;
  }

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    border: 2px solid ${colors.accent};

    img {
      transform: translateY(-6px) scale(1.1);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -75%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        ${colors.accent}55,
        transparent
      );
      transform: skewX(-25deg);
      animation: shine 0.9s ease forwards;
    }
  }

  @keyframes shine {
    0% {
      left: -75%;
    }
    100% {
      left: 125%;
    }
  }
`;

