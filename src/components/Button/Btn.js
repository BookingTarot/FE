import React from "react";

const Btn = ({ onClick, children, className }) => {
  return (
    <button style={{ borderRadius: "20px",
      width: "200px",
      padding: "5px 10px",
      fontSize: "14px",
      alignItems: "center"}} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
