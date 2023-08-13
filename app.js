const express = require('express');
const app = express();
const PORT = 3030;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register.html',(req,res)=> {
    res.sendFile(__dirname + '/views/register.html')
});

app.get('/login.html',(req,res)=> {
    res.sendFile(__dirname + '/views/login.html')
});

app.get('/tiendasOficales.html',(req,res)=>{
    res.sendFile(__dirname + '/views/tiendasOficales.html');
});

app.get('/vender.html',(req,res)=>{
    res.sendFile(__dirname + '/views/vender.html');
});

app.get('/misCompras.html',(req,res)=>{
    res.sendFile(__dirname + '/views/misCompras.html');
});


app.listen(3030,()=>{
    console.log(`[Server] running on port ${PORT}`);
})