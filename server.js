var app = require('express')();
var http = require('http').Server(app);
// var fs = require('fs');
// var parser = require('body-parser')
var socket = require('socket.io')(http)


app.get("/", function (req, res){
	res.send
})

app.get('/api/minesweeper', function(req, res){
	// fs.exists('./data.json', function(exists) {
	// 	if (exists){
	// 		fs.stat('./data.json', function(error, stats){
	// 			fs.open('./data.json', 'r', function(error, fd){
	// 				var buffer = new Buffer(stats.size);

	// 				fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer){
	// 					var data = buffer.toString("utf8", 0, buffer.length);

	// 					console.log(data);
	// 					fs.close(fd);
	// 				})
	// 			})
	// 		})
	// 	}
	// })
	var data = fs.readFileSync('./data.json', 'utf8')
	console.log(data)
	console.log('hit')
})

app.post('/api/minesweeper', function(req, res){
	console.log(req.body)
})

http.listen(4000, function(){
  console.log('listening on *:4000');
});
