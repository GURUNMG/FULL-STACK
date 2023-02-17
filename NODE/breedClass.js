const sa=require("superagent")
const fs=require("fs")

fs.readFile(`${__dirname}/breedname.txt`,(err,data)=>{
  // console.log(data.toString())
  sa.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res)=>{
    console.log(res.body)
  })
})