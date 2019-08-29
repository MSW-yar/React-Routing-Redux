import React from "react";

const Color = WrappedComponent => {
  const colorList = ["red", "orange", "purple", "blue", "yellow", "pink"];
  const colorrandom = colorList[Math.floor(Math.random() * 5)];
  const textColor = colorrandom + "-text";

  return props => {
    return (
      <div className={textColor}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Color;
