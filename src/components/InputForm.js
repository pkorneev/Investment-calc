import { useState } from "react";

const InputForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expecredInterest, setExpecredInterest] = useState("");
  const [duration, setDuration] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (currentSavings && yearlySavings && expecredInterest && duration) {
      props.onAddInvestment(
        currentSavings,
        yearlySavings,
        expecredInterest,
        duration
      );
    }
  };
  const currentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const expecredInterestChangeHandler = (event) => {
    setExpecredInterest(event.target.value);
  };
  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };
  const handleButtonClick = () => {
    props.onReset();
    setCurrentSavings("");
    setYearlySavings("");
    setExpecredInterest("");
    setDuration("");
  };
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expecredInterestChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={durationChangeHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleButtonClick}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
