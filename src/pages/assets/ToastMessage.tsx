import React from "react";
import style from "../../styles/modules/assets/Toastmess.module.scss";

interface ToastMessageProps {
  message: string;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message }) => {
  return (
    <div className={style.toastMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ToastMessage;
