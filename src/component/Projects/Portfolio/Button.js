import React, { useState } from "react";

const Btn = ({ title, setStack, stackName }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: "relative",
    padding: "12px 24px",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: (stackName === title) ?  "rgb(190, 20, 71)" : "white",
    border: "2px solid rgb(153, 5, 49)", 
    color: isHovered || (stackName === title) ? "white" : "#6366f1", 
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const spanStyle = {
    position: "absolute",
    inset: "0",
    backgroundColor: "#ff014f", // Indigo background
    transform: isHovered ? "translateX(0)" : "translateX(-100%)", // Slide in/out
    transition: "all 0.3s ease",
  };

  const spanTextStyle = {
    position: "relative",
    zIndex: "10",
    transition: "color 0.3s ease",
  };

  return (
    <button
      onClick={() => setStack(title)}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={spanStyle}></span>
      <span style={spanTextStyle}>{title}</span>
    </button>
  );
};

export default Btn;
