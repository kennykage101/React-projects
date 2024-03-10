import React, { useState } from "react";
import Header from "./Components/Header";
import InvestmentForm from "./Components/InvestmentForm";
import Table from "./Components/Table";

const App = () => {
  const [yearData, setYearData] = useState(null);

  const calculateHandler = (userInput) => {
    const yearlyData = [];
    if (userInput) {
      let currentSavings = userInput.enteredCurrSav;
      const yearlyContribution = userInput.enteredYrSav;
      const expectedReturn = userInput.enteredExpInt / 100;
      const duration = userInput.enteredInvDur;

      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;

        currentSavings += yearlyInterest + yearlyContribution;

        yearlyData.push({
          year: i + 1,
          initInv: userInput.enteredCurrSav,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
    }

    setYearData(yearlyData);
  };

  return (
    <div>
      <Header />

      <InvestmentForm onCalculateInv={calculateHandler} />
      {!yearData && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {yearData && <Table items={yearData} />}
    </div>
  );
};

export default App;
