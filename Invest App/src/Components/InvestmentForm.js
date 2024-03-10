import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";
import Button from "./Button/Button";
import Inputs from "./Inputs";

const InvestmentForm = ({ onCalculateInv }) => {
  const [userInput, setUserInput] = useState({
    enteredCurrSav: 1000,
    enteredYrSav: 500,
    enteredExpInt: 2,
    enteredInvDur: 2,
  });

  const onCurrSavingsHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredCurrSav: event.target.value.trim() };
    });
  };

  const onYearlyContrHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredYrSav: event.target.value.trim() };
    });
  };

  const onExpReturnHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredExpInt: event.target.value.trim() };
    });
  };

  const onDurationHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredInvDur: event.target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onCalculateInv(userInput);
  };

  const ResetInput = () => {
    setUserInput({
      enteredCurrSav: 1000,
      enteredExpInt: 2,
      enteredInvDur: 2,
      enteredYrSav: 500,
    });
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Inputs
        onCurrSavingsHandler={onCurrSavingsHandler}
        onYearlyContrHandler={onYearlyContrHandler}
        onExpReturnHandler={onExpReturnHandler}
        onDurationHandler={onDurationHandler}
        values={userInput}
      />
      <Button onResetInput={ResetInput} />
    </form>
  );
};

export default InvestmentForm;
