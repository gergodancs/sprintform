import React from "react";
import "./styles/button.scss";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default Button;
