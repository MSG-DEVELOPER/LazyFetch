import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  .success-message {
  color: #28a745;
  font-weight: bold;
  margin-top: 8px;
}

.error-message {
  color: #dc3545;
  font-weight: bold;
  margin-top: 8px;
}



  p.form-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p.intro-text {
    font-size: 0.9rem;
    font-style: italic;
    color: #ccc;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #888;
      font-size: 1rem;
    }

    button {
      padding: 10px;
      background-color: #1e90ff;
      border: none;
      color: white;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #1c86ee;
      }
    }
  }
`;
