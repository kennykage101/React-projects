import React from "react";
import styles from "./Input.module.css";

const Inputs = ({onCurrSavingsHandler,onYearlyContrHandler,onExpReturnHandler,onDurationHandler, values}) => {
  return (
    <div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={values.enteredCurrSav}
            onChange={onCurrSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={values.enteredYrSav}
            onChange={onYearlyContrHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={values.enteredExpInt}
            onChange={onExpReturnHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={values.enteredInvDur}
            onChange={onDurationHandler}
          />
        </p>
      </div>
    </div>
  );
};

export default Inputs;
