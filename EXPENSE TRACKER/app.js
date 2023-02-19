const express= require('express')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const port=3000

// app.get('/', (req, res)=>{
//   res.send("Testing successfull status:200")
// })

// api used to testing whether the server is running
app.get('/api/v1/health',(req, res)=>{
  // res.status(201) then 201 is displayed in the postman
  res.status(201).json({
    message:"WELCOME PAGE ",
    status:"Successs"
  })
})

// list of expenses done by user
const expenses=[
  {id:1, name:"MOVIE", amount:200, desc:"VAATHI"},
  {id:2, name:"FOOD", amount:500, desc:"BDAY TREAT"},
  {id:3, name:"COMPETITION", amount:300, desc:"INTER CLG"}
]

const expense_Details=[
  {id:1, paymentMode:'UPI'},
  {id:2, paymentMode:"CASH"},
  {id:3, paymentMode:"NETBANKING"}
]

// to get all the expenses from the server by the user
app.get("/api/v1/expenses", (req, res)=>{
  res.send(expenses)
})

// to know the specific expense done by the user
// http://localhost:3000/api/v1/expense/1 this will give the id value as 1
app.get("/api/v1/expense/:id", (req, res)=>{
  for( i=0; i<3; i++)
  {
    if(expenses[i].id==req.params.id)
    {
      res.status(200).json(expenses[i])
      // res.send(expenses[i])
    }
  }  
  // res.send("working") one route should have one respond
})

app.get("/api/v1/expensedetail/:id",(req,res)=>{
  result={}
  for(i=0; i<expenses.length; i++)
  {
    if(expenses[i].id==(req.params.id))
    {
      result={
        id:expenses[i].id,
        name:expenses[i].name,
        amount:expenses[i].amount,
        desc:expenses[i].desc,
        paymentMode:expense_Details[i].paymentMode
      }
      // result["id"]=expenses[i].id
      // result["name"]=expenses[i].name
      // result["amount"]=expenses[i].amount
      // result["desc"]=expenses[i].desc
      // result["paymentMode"]=expense_Details[i].paymentMode
      res.send(result)
    }
  }
})

app.post('/api/v1/expenses', (req,res)=>{
    let new_expense=req.body
    len=expenses.length

    new_expense.id=expenses[len-1].id+1
    let store_Expense={
      id:expenses[len-1].id+1,
      name:new_expense.name,
      amount:new_expense.amount,
      desc:new_expense.desc
    }
    // new_expense_Details.id=expense_Details[len-1].id+1

    // expenses[len]=new_expense
    expenses[len]=store_Expense
    let new_expense_details={
      id:expenses[len-1].id+1,
      paymentMode:new_expense.paymentMode
    }
    expense_Details[len]=new_expense_details

    // new_expense_details={
    //   id:new_expense.id,
    //   paymentMode:new_expense.paymentMode
    // }

    // expense_Details.paymentMode=req.body.paymentMode;
    console.log(req.body)
    console.log(new_expense_details)
    res.send(expense_Details)
})

// DELETE
app.delete('/api/v1/expense/:id',(req, res)=>{
  for(let i=0; i<expenses.length; i++)
  {
    if (expenses.id==req.params.id)
    {
      expenses.splice(i,1)
    }
  }
  res.send("DELETED")
})

// UPDATE
app.put("/api/v1/expense/:id", (req,res)=>{
  for(let i=0; i<expenses.length; i++)
  {
    if(expenses[i].id==req.params.id)
    {
      expenses[i].amount=req.body.amount
      res.send("AMOUNT UPDATED")
    }
  }
})
app.listen(port, ()=>{
  console.log("Server is running on port number",port);
})

