// AboutContact.style.js
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.main`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem 1rem;
  padding-top: 5rem;
  padding-bottom: 15rem;
`;

export const WorkNow = styled.p`
  font-size: 1rem;
  color: ${colors.secondary};
  margin-top: 0.5rem;
`;


export const IntroSection = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const ProfileImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${colors.primary};
  margin: 0;
`;

export const SubTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.accent};
  margin: 0.25rem 0 0;
`;

export const ProjectsSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.75rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }
`;

export const UnderConstructionImg = styled.img`
  width: 14rem;
  opacity: 0.75;
`;

export const StackSection = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.75rem;
    color: ${colors.primary};
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const StackTags = styled.div`
  display: flex;
  flex-direction: column; /* Cambio clave */
  gap: 2rem;

  div {
    text-align: center;
  }
`;


export const Tag = styled.span`
  display: inline-block;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 999px;
  margin: 0.25rem;
  font-size: 0.9rem;
`;

export const ContactSection = styled.section`
  text-align: center;

  h2 {
    font-size: 1.75rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;  /* espacio entre icono y texto */
  background-color: white; /* mejor contraste */
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s ease;

  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;


export const ContactInfo = styled.div`
  margin-left: auto; /* Empuja a la derecha */
  text-align: right;
  font-size: 1rem;
  color: ${colors.primary};
  line-height: 1.5;

 
`;

export const ButtonsWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

