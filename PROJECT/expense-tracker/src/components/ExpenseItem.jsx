import React from "react";
import './ExpenseItem.css'

const ExpenseItem=()=>{
  return (
    <div className="expense-item">
      <div>data</div>
      <div className="expense-item__description">
        <h1>Title</h1>
        <div className="expense-item__price">amount</div>
      </div>
    </div>
  )
}


export default ExpenseItem;