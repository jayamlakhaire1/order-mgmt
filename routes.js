//this will contain all routes endpoint for api's
var http = require('http');

http.get('/auth/signup',(req,res)=>{

    res.send('account created successfully')
})

http.get('/auth/login',(req,res)=>{
    
    res.send('auth successfull')
})

