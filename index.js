
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const { v4: uuidv4 } = require('uuid');
app.use(express.static(path.join(__dirname, 'public')))
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

app.listen(port,()=>{
  console.log('listening')
})