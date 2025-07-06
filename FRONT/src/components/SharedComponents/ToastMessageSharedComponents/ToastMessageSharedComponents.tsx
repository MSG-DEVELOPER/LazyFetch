import { useEffect } from "react";
import { ToastWrapper } from "./ToastMessageSharedComponents.style";

interface ToastMessageProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}


function ToastMessageSharedComponents({ type, message, onClose }: ToastMessageProps) {
 useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <ToastWrapper type={type}>
      {message}
      <button className="close-btn" onClick={onClose} aria-label="Close message">
        ×
      </button>
    </ToastWrapper>
  );
}

export default ToastMessageSharedComponents