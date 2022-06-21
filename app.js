// console.log('Hello world node.js')
// const fs = require('fs');

// fs.writeFileSync('hello.text','hello from node.js');
const http = require('http');

const routes = ('./routes');
// function rqListener(req,res){

// }
// http.createServer(rqListener)
const fs = require('fs');
const server = http.createServer(routes)
    //   const url = req.url;
    //   const method = req.method;
     
     

server.listen(3000);














