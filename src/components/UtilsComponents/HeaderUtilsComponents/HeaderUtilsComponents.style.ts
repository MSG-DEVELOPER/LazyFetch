import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Container = styled.div`
  padding-top: 4.5rem;
  padding-bottom: 2.5rem;
  text-align: center; 

  .highligth {
    color: ${colors.accent};
    font-weight: 900;
  }

  h2 {
    font-size: 1.8rem;
    color: black;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .tutorial-link {
    display: flex; 
    align-items: center;
    width: 10%;
    justify-content: center;
    background-color: ${colors.secondarySoft};
    padding: 0 1.5rem;
    border-radius: 999px;
    margin: 0 auto 5rem;
    gap: 0.8rem;

     img{
        width: 4rem;
      }

    h3 {
      margin: 0;
      color: black;
      font-size: 1rem;
      font-weight: 800;
    }

    a {
      color: white;
      font-size: 1.2rem;
      text-decoration: none;
      transition: transform 0.2s ease;

     
    }

    a:hover {
      transform: scale(1.2);
    }
  }
`;
