const fs=require("fs");

// read file  
fs.readFile('E:/SUPER DREAM FIT/NODE/read.txt',(err,data)=>{
  if(err)
  {
    console.log("ERROR");
    return;
  }
  console.log(data.toString());
})

// write file

fs.writeFile('E:/SUPER DREAM FIT/NODE/read.txt','mathi',(err)=>{
  if(err)
  {
    console.log("Error");
    return;
  }
  console.log("SAVED SUCCESSFULLY");
})

// fs.unlink('E:/SUPER DREAM FIT/NODE/reads.txt',(err)=>{
//   if(err)
//   {
//     console.log("ERROR");
//     return;
//   }
//   console.log("deleted");
// })

fs.rename('E:/SUPER DREAM FIT/NODE/reads.txt','E:/SUPER DREAM FIT/NODE/read.txt',(err)=>{
  if(err)
  {
    console.log("Error");
    return;
  }
  console.log("FILE RENAMED");
})