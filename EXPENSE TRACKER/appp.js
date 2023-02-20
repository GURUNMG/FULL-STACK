const express= require('express')
const bodyParser=require('body-parser')
const mongoose=require("mongoose")

const {getExpenses, getExpenseId, createExpense,
  deleteExpense,loggerFunc,checkAdmin}=require("./controller/expense.js")
mongoose.connect("mongodb://127.0.0.1:27017/EXPENSE-TRACKER").then(()=>{
  console.log("connected")
})

// const db=mongoose.connection;

// db.on("error",console.error.bind(console, "connection error"));
// db.once("open", function(){
//   console.log("CONNECTED SUCCESSFULLY")
// })

const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// app.use(loggerFunc) this is for using loggerfun in all the api
const port=3000


// api used to testing whether the server is running
app.get('/api/v1/health',(req, res)=>{
  // res.status(201) then 201 is displayed in the postman
  res.status(201).json({
    message:"WELCOME PAGE ",
    status:"Successs"
  })
})



app.get("/api/v1/expenses", getExpenses)
app.get("/api/v1/expense/:id",getExpenseId)
app.post("/api/v1/expenseadd",checkAdmin,createExpense)
app.delete("/api/v1/deleteexpense/:id",deleteExpense)
app.listen(port, ()=>{
  console.log("Server is running on port number",port);
})
