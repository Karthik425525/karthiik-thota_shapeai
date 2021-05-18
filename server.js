const express = require("express");
const bodyparser=require("bodyparser");
const app=express();
app.use(bodyparser.unlencoded({
  entended:true
}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/",function(req,res){
  res.send("<h1>Hello World</h1>");
});
app.get("/about",function(req,res){
  res.send("<h1>I'm robot</h1><p>speed one terahertz</p>");
});
app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result=n1+n2;
  res.send(result);
});
app.listen(3000,function(){
  console.log("server has started on port 3000");
});