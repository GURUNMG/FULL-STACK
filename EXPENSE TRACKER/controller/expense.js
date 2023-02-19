const Expenses=require("../models/expense.js")

exports.getExpenses= async(req, res, next)=>{
  try{
    const expenses=await Expenses.find();
    console.log(expenses)

    return res.status(200).json({
      success:true,
      count:expenses.length,
      data:expenses
    })
  } catch(err){
    return res.status(500).json({
      success:false, 
      error:"Server Error"
    })
  }
}

exports.getExpenseId=async(req, res, next)=>{
  try{
    const expenses=await Expenses.findById(req.params.id)
    if(!expenses)
    {
      return res.status(404).json({
        success:false,
        error:"Expense not found"
      }) 
    }
    return res.status(200).json({expenses})
  }catch{
    return res.status(500).json({
      success:false, 
      error:"Server Error"
    })
  }
}

exports.createExpense=async(req, res, next)=>{
  try{
    const {name, amount, desc}=req.body;
    console.log(name, amount, desc)
    const expense=await Expenses.create(req.body)

    return res.status(201).json({
      success:true, 
      data:expense
    })
  }catch(err){
    if(err.name==='ValidationError')
    {
      const message=Object.values(err.errors).map(val=> val.message)

      return res.status(400).json({
        success:false,
        error:message
      })
    } 
    else{

      return res.status(500).json({
        success:false,
        error:"Internal Server Error"
      })
    }
  }
}

exports.updateExpense=async (req, res, next)=>{
  try{
    const expense=await Expenses.findById(req.params.id);
    
    if(!expense)
    {
      return res.status(404).json({
        success:false,
        error:"Not found data" 
      })
    }
    expense.update();

    return res.status(200).json({
      success:true,
      data:"UPDATED"
    })
  }catch(err){
    return res.status(500).json({
      success:false,
      error:"server error"
    })
  }
}
exports.deleteExpense=async (req, res, next)=>{
  try{
    const expense=await Expenses.findById(req.params.id);

    if(!expense)
    {
      return res.send(404).join({
        success:false,
        error:"id not found"
      })
    }
    await expense.remove()

    return res.status(200).json({
      success:true,
      data:{}
    })
  }catch(err){
    return res.send(500).json({
      success:false,
      error:"Server Error"
    })
  }
}
