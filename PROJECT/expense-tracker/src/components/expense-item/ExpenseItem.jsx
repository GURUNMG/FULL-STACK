import React from "react";
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
  console.log(props)
  let {title=" ",
  amount=0,
  date=new Date()}=props;
  
  
  const day=date.toLocaleString('en-US', {day:'2-digit'})
  const month=date.toLocaleString('en-US',{month:'long'});
  const year=date.getFullYear();
  console.log(day, month, year)

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  )
}


export default ExpenseItem;