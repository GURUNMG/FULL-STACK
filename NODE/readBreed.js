const fs=require('fs');
const sa=require('superagent');

fs.readFile(`${__dirname}/breedname.txt`,(err,data)=>{
  if(err)
  {
    console.log("error",err);
    return;
  }
  sa.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res)=>{
    console.log(res.body)
  })
  // console.log(data.toString());
})