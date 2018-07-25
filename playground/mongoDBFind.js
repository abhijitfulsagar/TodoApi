const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, client)=>{
	if(error){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');
	//get all data
	// var db = client.db('TodoApp');
	// db.collection('Todos').find().toArray().then((docs)=>{
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch data:',err);
	// });

	// find by particular id
	// var db = client.db('TodoApp');
	// db.collection('Todos').find({_id: new ObjectID('5b58bbc361bedd933b1ccafa')}).toArray().then((docs)=>{
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch data:',err);
	// });

	//find by particular field
	var db = client.db('TodoApp');
	db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('Unable to fetch data:',err);
	});
	client.close();
});