import React from "react";
import styles from "./Table.module.css";

const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = ({ items }) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {items.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(yearData.savingsEndOfYear -
                yearData.initInv -
                yearData.yearlyContribution * yearData.year)}
            </td>
            <td>
              {formatter.format(yearData.initInv + yearData.yearlyContribution * yearData.year)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
