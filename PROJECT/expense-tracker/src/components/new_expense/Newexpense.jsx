import React from "react";
import ExpenseForm from "../expense_form/ExpenseForm";
import './Newexpense.css'

const Newexpense=(props)=>{
  const onSave=(new_expense={})=>{
    const expense={
      ...new_expense,
      id:Math.random().toString()
    }
    props.onAddExpense(expense);
  }
  return (
    <div className="new-expense">
     <ExpenseForm onFormSubmit/>
    </div>
  )
}

export default Newexpense;