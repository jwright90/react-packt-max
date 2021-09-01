import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {

  const expenseDate = new Date(2021, 8, 1);
  const expenseTitle = 'Car Insurance';
  const expensePrice = 320.00;

  return (
    <div className="expense-item">
      <div className="">{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£ {expensePrice.toFixed(2)}</div>
      </div>
    </div>

  );
}

export default ExpenseItem;