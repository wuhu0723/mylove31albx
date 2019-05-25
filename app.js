var express = require('express')
var app = express()
app.listen(3003,()=>{})

app.get('/',(req,res)=>{
    res.end('ok')
})