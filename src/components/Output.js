import React from "react";

const Output = (props) => {
  return (
    <table className="result">
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
        {props.data.map((elem, index) => (
          <tr key={index}>
            <td>{elem.year}</td>
            <td>{elem.savingsEndOfYear}</td>
            <td>{elem.yearlyInterest}</td>
            <td>{elem.totalInterest}</td>
            <td>{elem.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Output;
