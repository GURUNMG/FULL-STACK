const fs=require('fs')

const read=(filename)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(filename,(err,data)=>{
      if(err)
      {
        reject("ERROR OCCURED")
      }
      resolve(data);
    })
  })
}

read(`${__dirname}/breedname.txt`).then((data)=>{
  console.log(data.toString())
}).catch((message)=>{
  console.log(message);
})