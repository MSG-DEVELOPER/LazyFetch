import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 999px;
  padding: 6px 12px;
  gap: 8px;

  .icon {
    background-color: white;
    color: ${colors.secondary};
    border-radius: 50%;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .input {
    border: none;
    background: transparent;
    color: black;
    outline: none;
    font-size: 0.9rem;
    width: 180px;

    &::placeholder {
      color: #ccc;
    }
  }
`;
