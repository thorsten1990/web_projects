const http = require('http');
const myModule = require('./myModule')

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Welcome \n");
    res.write(myModule.myModule());
    res.end();
    
}).listen(3000);

