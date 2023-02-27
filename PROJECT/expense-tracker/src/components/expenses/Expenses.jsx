import React from "react";
import ExpenseItem from './expense-item/ExpenseItem';
import './Expenses.css'
const Expenses=(props)=>{
  const{expenses}=props;
  return (
    <div className="expenses">{
      expenses.map((each_expense)=>{
        return(
          <ExpenseItem title={each_expense.title}
          amount={each_expense.amount}
          date={each_expense.date}/>
        )
      })
    }
    </div>
  )
}


export default Expenses;