import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const Count = () => {
  const [count, setCount] = React.useState(1);
  const [check, setCheck] = React.useState(true);
  const countStyle = {
    minWidth: "3.7rem",
    textAlign: "center",
    transform: "translateY(-.4rem)",
    padding: "0 1rem",
  };
  const btnStyle = {
    border: "none",
  };
  const borderStyle = {
    border: "1px solid #e5e5e5",
    margin: "0 1rem",
    padding: ".5rem 0",
    maxWidth: "10rem",
    display: "flex",
    justifyContent: "space-between",
    maxHeight: "3.4rem",
  };
  const Plus = () => {
    if (count === 1) {
      setCheck(true);
    }
    setCount(count + 1);
  };
  const Minus = () => {
    if (count === 1) {
      setCheck(!check);
    }
    if (count > 1) {
      setCheck(true);
      setCount(count - 1);
    }
  };
  return (
    <div style={borderStyle}>
      {check ? (
        <Button onClick={Minus} size="small" style={btnStyle}>
          <MinusOutlined />
        </Button>
      ) : (
        <Button onClick={Minus} disabled size="small" style={btnStyle}>
          <MinusOutlined />
        </Button>
      )}

      <p style={countStyle}>{count}</p>
      <Button onClick={Plus} size="small" style={btnStyle}>
        <PlusOutlined />
      </Button>
    </div>
  );
};
export default Count;
