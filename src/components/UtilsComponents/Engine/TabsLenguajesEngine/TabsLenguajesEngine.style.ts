import styled from "styled-components"
import { colors } from "../../../../styles/colors"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .tabs {
    display: flex;
    gap: 1rem;

    button {
      background: none;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-weight: bold;
      color: #555;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;

      &.active {
      
         border-color: ${colors.accent};
    }
   

      &:hover {
        color: #000;
      }
    }
  }

  .content {
   
    background:white;
    padding: 1rem;
    border-radius: 6px;
    color:white;
    p {
      margin: 0;
    }
  }
`