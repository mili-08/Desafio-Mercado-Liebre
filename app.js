const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.get('/ofertas.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/ofertas.html'));
});

app.get('/tiendasOficales.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/tiendasOficales.html'));
});

app.get('/vender.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/vender.html'));
});

app.get('/ayuda.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/ayuda.html'));
});

app.get('/cuenta.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/cuenta.html'));
});

app.get('/ingresar.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/ingresar.html'));
});

app.get('/misCompras.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/misCompras.html'));
});
app.listen(3030,()=>{
    console.log("[Server] Servidor Corriendo en el puerto 3030");
})