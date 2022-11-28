const http =require("http");
const User = require("./user.js");
http.createServer(function(request, response){
    response.end("Hello nodejs");
}).listen(3000,"127.0.0.1", function(){console.log("server started listen port 3000");
});

const os = require("os");
let userName = os.userInfo().username;
 
let me = new User(userName, 25);
me.sayHi();
me.displayInfo();