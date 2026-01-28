// // const{add,remove}=require("./math");
// // console.log(add(1,4),remove(1,5));

// const http = require("http");
// const port = 3001

// http.createServer((req,res)=>{
//      switch(req.url){
//         case "/":
//             res.write("Welcome to the Home Page");
//             res.end();
//             break;
//         case "/about":
//             res.write("This is the About Page");
//             res.end();
//             break;
//         default:
//             res.writeHead(404, {"Content-Type": "text/html"});
            
//             res.end("<h1> 404 Not Found </h1>");
//      }
// }).listen(port,()=>{
//     console.log("Server is listening on port 3001");
// });













const http = require("http");
const port = 3001
const fs = require("fs")

http.createServer((req,res)=>{
    const timestamp = new Date().toLocaleString();
     const log = "User is requested at :"+timestamp+"\n";
     fs.appendFile("server_log.txt",log,(err,data)=>{
    if(err) console.log(err);

     })
     switch(req.url){
        // case "/":
        //     // res.write("Welcome to the Home Page");
        //     res.writeHead(home);
        //     res.end();
        //     break;
        case "/about":
            res.write("This is the About Page");
            res.end();
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/html"});
            
            res.end("<h1> 404 Not Found </h1>");
     }
}).listen(port,()=>{
    console.log("Server is listening on port 3001");
});













