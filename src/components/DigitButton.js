import React from "react";
import { ACTIONS } from "../utils/actions";

const DigitButton = ({ dispatch, digit }) => {
  const buttonHandler = () => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  };

  return <button onClick={buttonHandler}>{digit}</button>;
};

export default DigitButton;
