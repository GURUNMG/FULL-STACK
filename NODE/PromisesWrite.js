const { rejects } = require('assert');
const fs=require('fs');


Write=(filename,data)=>{
  return new Promise((resolve, reject)=>{
    fs.writeFile(filename,data,(err)=>{
      if(err)
      {
        reject("FAILED TO WRITE")
      }
      resolve("FILE SAVED");
    })
  })
}

Write(`${__dirname}/breed.txt`,"boomer").then((message)=>{
  console.log(message)
}).catch((message)=>{
  console.log(message)
})