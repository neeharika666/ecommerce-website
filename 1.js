const express=require('express');
const path=require('path');
const app=new express();
app.set('view engine','pug');
app.use(express.static(__dirname + '/static'));
app.get('/',(req,res)=>{
   res.render('home.pug');
})

app.get('/contact',(req,res)=>{
   res.render('contact.pug');
})
app.get('/women',(req,res)=>{
   res.render('women.pug');
})
app.get('/bagb',(req,res)=>{
   res.render('buy.pug');
})
app.post('/form',(req,res)=>{
   res.render('form.pug');
})
app.get('/kids',(req,res)=>{
   res.render('kids.pug');
})
app.get('/home&living',(req,res)=>{
   res.render('homel.pug');
})
app.get('/men',(req,res)=>{
   res.render('men.pug');
})
app.get('/p',(req,res)=>{
   res.render('p.pug');
})
app.listen(8001);