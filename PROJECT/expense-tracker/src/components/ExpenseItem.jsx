import React from "react";
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
  console.log(props)
  let {title=" ",
  amount=0,
  date=new Date()}=props
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  )
}


export default ExpenseItem;