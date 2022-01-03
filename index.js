var express=require('express');
var app = express()

var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
app.get('/', function(req,res){

    res.sendFile(__dirname + '/index.html');
});
io.on('connection',function(socket){
    console.log("A user connection is detected");
    socket.on('chat message',function(msg){
        io.emit('chat message',msg);
        console.log('message:'+msg);
    
    });
});
http.listen(process.env.PORT||4000,function() { // Dont Hard set the port

console.log("Listening on the port");
});
