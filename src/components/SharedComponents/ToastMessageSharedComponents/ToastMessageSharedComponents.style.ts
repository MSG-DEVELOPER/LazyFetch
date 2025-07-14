import styled from "styled-components";

export const ToastWrapper = styled.div<{ type: string }>`
 position: fixed;
  bottom: 50px; 
  right: 20px;
  max-width: 320px; 
  padding: 14px 22px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.3);
  font-weight: 600;
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${(props) =>
    props.type === "success" ? "rgba(40, 167, 69, 1)" : "rgba(220, 53, 69, 1)"};
  animation: fadeInOut 4s forwards;
  z-index: 9999;

  .close-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    line-height: 1;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }
    90% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;