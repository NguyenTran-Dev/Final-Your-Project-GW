import React from "react";
import "./Modal.scss";
const Modal = (props) => {
  return (
    <div className="content">
      <p>{props.name}</p>
    </div>
  );
};
export default Modal;
