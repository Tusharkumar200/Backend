const http = require('http');

const dataControl=(req,resp)=>{
    
    resp.write("<h1>Hello ,Tushar this is my first node program</h1>");
    resp.end();
}

http.createServer(dataControl).listen(5000);
