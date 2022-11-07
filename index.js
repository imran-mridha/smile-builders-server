const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('Server Running')
})

app.listen(port, ()=>{
  console.log('Server Running on port', port);
})