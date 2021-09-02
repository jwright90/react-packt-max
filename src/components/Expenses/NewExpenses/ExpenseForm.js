import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    /* Alternative    
    setUserInput((prevState) => {
      return ({ ...prevState, enteredTitle: e.target.value })
    });
    */
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    /* Alternative
      setUserInput((prevState) => {
        return ({ ...prevState, enteredDate: e.target.value })
      });
    */
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    /* Alternative
    setUserInput((prevState) => {
      return ({ ...prevState, enteredAmount: e.target.value })
    });
    */
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"
            onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-09-01" max="2023-01-01"
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;