import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  cursor: pointer;
 

  &:hover {
    transform: scale(1.02);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px; /* aseguramos que no se deforme */
`;

export const CardContent = styled.div`
  padding: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ApiLink = styled.a`
  font-weight: bold;
  color: #4fc3f7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Endpoint = styled.div`
  font-size: 0.9rem;
  color: #ccc;
  word-break: break-all;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #eee;
`;

export const Example = styled.code`
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 6px;
  border-radius: 6px;
  color:white;
  background-color: ${colors.accent};
`;

export const CardIcons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 1.2rem;
  opacity: 0.7;
`;
