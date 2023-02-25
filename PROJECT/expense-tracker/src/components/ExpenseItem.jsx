import React from "react";
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
  console.log(props)
  const date=new Date().toISOString();
  const amount=10;
  const title=""
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  )
}


export default ExpenseItem;