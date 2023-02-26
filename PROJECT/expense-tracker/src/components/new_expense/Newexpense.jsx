import React from "react";
import './Newexpense'

const Newexpense=()=>{
  return (
    <div>
      <form action="">
        <label htmlFor="title">TITLE</label>
        <input type="text" name="" id="title"/>

        <label htmlFor="amount">AMOUNT</label>
        <input type="number" name="" id="amount" />

        <label htmlFor="date">DATE</label>
        <input type="date" name="" id="date" />
      </form>
    </div>
  )
}

export default Newexpense;