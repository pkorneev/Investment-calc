import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Output from "./components/Output";

function App() {
  const [dataForOutput, setdataForOutput] = useState("");

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results
    const inputSavings = +userInput["current-savings"];
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyInterest: formatter.format(yearlyInterest),
        totalInterest: formatter.format(
          currentSavings - inputSavings - yearlyContribution * (i + 1)
        ),
        investedCapital: formatter.format(
          inputSavings + yearlyContribution * (i + 1)
        ),
        yearlyContribution: formatter.format(yearlyContribution),
      });
    }
    setdataForOutput(yearlyData);
  };

  const addInvestmentHandler = (
    currentSavings,
    yearlySavnings,
    interest,
    duration
  ) => {
    const obj = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlySavnings,
      "expected-return": interest,
      duration: duration,
    };
    calculateHandler(obj);
  };
  const onClickResetHandler = (event) => {
    setdataForOutput("");
  };
  return (
    <div>
      <Header />
      <InputForm
        onAddInvestment={addInvestmentHandler}
        onReset={onClickResetHandler}
      />
      {!dataForOutput && (
        <p className="fallback">No investment calculated yet.</p>
      )}
      {dataForOutput && <Output data={dataForOutput} />}
    </div>
  );
}

export default App;
