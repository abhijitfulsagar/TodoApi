const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, client)=>{
	if(error){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');
	var db = client.db('TodoApp');
	//deleteMany
	// db.collection('Todos').deleteMany({text:'study node.js'}).then((res)=>{
	// 	console.log('deleted item:',res);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text:'study node.js'}).then((res)=>{
	// 	console.log('deleted item:',res);
	// });
	
	//findOneAndDelete
	db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
		console.log('deleted item:',res);
	});

	client.close();
});