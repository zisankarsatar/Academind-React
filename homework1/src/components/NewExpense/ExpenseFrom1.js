import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (identifier, value) => {
    if (identifier === "title") {
      setUserInput({
        ...userInput,
        title: value,
      });
    } else if (identifier === "amount") {
      setUserInput({
        ...userInput,
        amount: value,
      });
    } else {
      setUserInput({
        ...userInput,
        date: value,
      });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(event) => handleInputChange("title", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={(event) =>
              handleInputChange("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={(event) => handleInputChange("date", event.target.value)}
          />
        </div>
        <div className="new-expense__action">
          <button type="submit">Submit Form</button>
          <button type="button" onClick={(props.onCloseFrom)}>Cancel</button>
        </div>
      </div>
    </form>
  );
}
