var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

app.use(bodyParser.json());

app. get('/todos',(req,res)=>{
	 Todo.find().then((todos)=>{
	 	//response.send(todos);   this sends and array
	 	res.send({todos}); // this sends an object which lets us to add new properties if needed
	 },(err)=>{
	 	res.status(400).send(err);
	 })
});

app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text:req.body.text
	});

	todo.save().then((result)=>{
		res.send(result);
	},(e)=>{
		res.status(400).send(e);
	});
});



app.listen(3000,()=>{
	console.log('Started on 3000');
});

module.exports = {app};
//command to run the server
//C:\Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath C:\Users\ABHIJIT\mongo-data