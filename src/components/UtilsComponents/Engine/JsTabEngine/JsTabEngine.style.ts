import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  section {
    padding: 24px;
    margin-bottom: 12px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  section:nth-child(odd) {
    background-color: ${colors.secondary};
  }

  section:nth-child(even) {
    background-color: #f4f4f4; 
  }
`;
