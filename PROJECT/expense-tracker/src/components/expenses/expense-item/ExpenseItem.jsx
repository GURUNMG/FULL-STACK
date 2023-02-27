import React,{useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "../expense-date/ExpenseDate";
const ExpenseItem=(props)=>{
  // console.log(props)
  let {
    // title=" ",
  amount=0,
  date=new Date()}=props;
    // delete the scope of title used previously ...
  const[title, setTitle]=useState(props.title);
  const clicked=()=>{
    setTitle("UPDATED");
  }
  // console.log(title)
  return (
    <div className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clicked}>Change Title</button>
    </div>
  )
}


export default ExpenseItem;