const mongoose=require("mongoose")

const ExpensesSchema= new mongoose.Schema({
  name:{
    type:String,
    trim:true,
    required:[true, "please add text"]
  },
  amount:{
    type:Number,
    required:[true, "Enter amount in positive"]
  },
  desc:{
    type:String
  }
})

module.exports=mongoose.model('Expenses',ExpensesSchema)
// module.exports = Expenseschema;