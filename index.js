
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.get('/',(req,res)=>{
  res.render('home')
  
})

app.get('/media',(req,res)=>{
  res.render('media')
})

app.get('/files',(req,res)=>{
  res.render('files')
})

app.get('/rand',(req,res)=>{
  console.log('your on the rand page');
  res.render('rand')
  
})
app.listen(port,()=>{
  console.log('listening')
})