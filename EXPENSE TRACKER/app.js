const express= require('express')

const app=express()
const port=3000

// app.get('/', (req, res)=>{
//   res.send("Testing successfull status:200")
// })

app.get('/api/v1/health',(req, res)=>{
  // res.status(201) then 201 is displayed in the postman
  res.status(201).json({
    message:"WELCOME PAGE ",
    status:"Successs"
  })
})
app.listen(port, ()=>{
  console.log("Server is running on port number",port);
})