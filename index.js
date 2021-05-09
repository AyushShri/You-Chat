var express=require('express');
var app = express()

var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
app.get('/test', function(req,res){

    res.sendFile(__dirname + '/index.html');
});
app.post('/test',function(req,res){
   username = req.get("username");
   alert(Username+"Joined")
    console.log(req);
});
io.on('connection',function(socket){
    console.log("A user connection is detected");
    socket.broadcast.emit("chat message", { name: 'Anonymous', message: 'A NEW USER HAS JOINED' })
    socket.on('chat message',function(msg){
        io.emit('chat message',msg);
        console.log('message:'+msg);
    
    });
});
http.listen(4000,function(){
   

console.log("Listening on the port");
});