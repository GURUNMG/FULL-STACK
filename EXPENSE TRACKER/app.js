const express= require('express')

const app=express()
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

// to get all the expenses from the server by the user
app.get("/api/v1/expenses", (req, res)=>{
  res.send(expenses)
})

app.listen(port, ()=>{
  console.log("Server is running on port number",port);
})