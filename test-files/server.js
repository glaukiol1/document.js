const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, "../")))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'test.html'))
})
app.get('/script.js', (req,res)=>{
    res.sendFile(path.join(__dirname, 'script.js'))
})

app.listen(3000)