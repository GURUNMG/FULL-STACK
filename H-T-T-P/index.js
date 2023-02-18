const http=require("http");

const port=3002;
const host="localhost"

/*const requestListener=(req,res)=>{
  // console.log(res);
  // res.writeHead(200); //optional
  res.end("HELLO GURUBHARAN N M");
}*/

const requestListener=(req, res)=>{
  res.setHeader('Content-Type','application/json')
  res.writeHead(200);
  res.end(`{"message":"success", "url":"http://random/images.myapplication"}`);
}

const server=http.createServer(requestListener);
server.listen(port, host,()=>{
  console.log("Server is listening on port",port);
})