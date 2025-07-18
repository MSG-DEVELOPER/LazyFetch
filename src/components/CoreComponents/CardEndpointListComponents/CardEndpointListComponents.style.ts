import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Card = styled.div`
  background-color: ${colors.primary};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
  transition: transform 0.2s ease;
  padding: 16px;
  gap: 12px;
  color: white;

  &:hover {
    transform: scale(1.02);
  }

  .link {
    font-weight: bold;
    color: #4fc3f7;
    text-decoration: none;
    font-size: 0.95rem;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }

  .image {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 8px;
  }

  .description-box {
    padding: 12px;
    background-color: ${colors.secondary};
    border-radius: 8px;
  }

  .description {
    margin: 0;
    font-size: 0.95rem;
    color: black;
    word-break: break-word;

    display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  }

  .icons {
    display: flex;
    gap: 8px;
    margin-top: 4px;
  }

  .icon {
    background-color: #fff;
    color: #1e1e1e;
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
  }

 
    
   
`;
