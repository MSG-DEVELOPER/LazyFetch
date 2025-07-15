// AboutTech.style.js
import styled from "styled-components";
import { colors } from "../../styles/colors";
export const Container = styled.main`

  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Section = styled.section`
padding-top: 5rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.75rem;
  color: ${colors.accent};
  margin-bottom: 0.75rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${colors.primary};
`;

export const List = styled.ul`
  margin: 0.5rem 0 0.5rem 1.25rem;
  color: ${colors.primary};
  li {
    margin-bottom: 0.5rem;
  }
`;

export const CodeBlock = styled.div`
  background-color: #1e1e1e;
  color: #dcdcdc;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  pre {
    margin: 0;
    font-size: 0.85rem;
  }
`;
