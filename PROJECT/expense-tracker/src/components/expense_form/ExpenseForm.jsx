import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm=()=>{

  const [enteredTitle, setEnteredTitle]=useState('');
  const onTitleChange=(event)=>{
    setEnteredTitle(event.target.value)
  }

  const[enteredAmount, setEnteredAmount]=useState('');
  const onAmountChange=(event)=>{
    setEnteredAmount(event.target.value)
  }

  const[enteredDate, setEnteredDate]=useState('');
  const onDateChange=(event)=>{
    setEnteredDate(event.target.value)
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    const new_expense={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    props.onFormSubmit(new_expense);
    settitle("")
    setEnteredAmount("")
    setDate()
  }
  return(

       <form action="" onSubmit={onSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">TITLE</label>
            <input type="text" name="expense_title" id="title" 
            onChange={onTitleChange} value={settitle}/>
          </div>

          <div className="new-expense__control">
            <label htmlFor="amount">AMOUNT</label>
            <input type="number" name="expense_amount" id="amount"  min="0" 
            onChange={onAmountChange} value={setamount}/>
          </div>

          <div className="new-expense__control">
            <label htmlFor="date">DATE</label>
            <input type="date" name="expense_date" id="date" 
            onChange={onDateChange} value={setDate}/>
          </div>
        </div>

        <div className="new-expense__actions">
          <button>cancel</button>
          <button type="submit">Add Expense</button>
        </div>

      </form>
  )
}

export default ExpenseForm;