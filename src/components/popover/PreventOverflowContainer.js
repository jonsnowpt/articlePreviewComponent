import React from "react";

const containerStyle = {
  overflow: "hidden",
  position: "relative"
};
const contentStyle = {
  height: "400%",
  width: "230%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap"
};

const PreventOverflowContainer = ({ children, height = 500 }) => {
  const containerRef = React.createRef();
  const contentRef = React.createRef();

  React.useEffect(() => {
    containerRef.current.scrollTop = contentRef.current.clientHeight / 2 - 60;
    containerRef.current.scrollLeft =
      contentRef.current.clientWidth / 2 - containerRef.current.clientWidth / 2;
  });

  return (
    <div
      id="preventOverflowContainer"
      style={{ ...containerStyle, height }}
      ref={containerRef}
    >
      <div style={contentStyle} ref={contentRef}>
        {children(() => containerRef.current)}
      </div>
    </div>
  );
};

export default PreventOverflowContainer;
