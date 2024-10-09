import React, { useState } from "react";
import "../styles/Child.css"

const Selection = ({ nextBackground }) => {
    console.log(nextBackground)
  const [boxStyle, setBoxStyle] = useState({});
  console.log(boxStyle)


  const applyColor = () => {
    setBoxStyle(nextBackground);
  };

  return (
    <div
      className="fix-box"
      style={{backgroundColor:boxStyle.background}}
      onClick={applyColor} 
    >
      Click to change color
    </div>
  );
};

export default Selection;
