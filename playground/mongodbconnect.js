const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, client)=>{
	if(error){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');
	// const db = client.db('TodoApp');
	// db.collection('Todos').insertOne({
	// 	text:'Something to do',
	// 	completed:false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert:',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// })

	const db = client.db('TodoApp');
	db.collection('Users').insertOne({
		name:'Abhijit',
		age:25,
		location:'Mountain view , California'
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert:',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	})
	client.close();
});