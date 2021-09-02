import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

  const [dropdownYear, setDropdownYear] = useState('2020');

  const dropdownChangeHandler = selectedYear => {
    setDropdownYear(selectedYear);
  }

  return (
    <div >

      <Card className="expenses">
        <ExpensesFilter selected={dropdownYear} onDropdownChange={dropdownChangeHandler} />

        {props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      </Card>
    </div>
  );
}

export default Expenses;