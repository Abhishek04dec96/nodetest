const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app =express();


app.use((req,res,next)=>{
  var dat=new Date().toString();
  var log= dat +':' + req.method + req.url ;
  fs.appendFile('server.log',log + '\n',(err)=>{
    if(err){
      console.log('maachud gayi ');
    }
  })

  next();
});
//app.use((req,res,next)=>{
//  res.render('maintainence.hbs');
//});
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials')
app.get('/',(req,res)=>{
  res.send('<h1>Hello Express</h1>');

});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    currentYear: new Date().getFullYear()
  });

});
app.get('/login',(req,res)=>{
  res.send('<h1>login</h1>');

});
app.get('/sad',(req,res)=>{
  res.send('<h1>what to do</h1>');

});
app.listen(3000,()=>{
  console.log('done dona done ');
});
