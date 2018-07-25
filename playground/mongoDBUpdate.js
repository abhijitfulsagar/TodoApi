const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, client)=>{
	if(error){
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');
	var db = client.db('TodoApp');
	
	//findOneAndUpdate
	db.collection('Todos').findOneAndUpdate({completed:false},{
		$set:{
			completed:true
		}
	},{
			returnOriginal:false
		}).then((res)=>{
		console.log('deleted item:',res);
	});

	client.close();
});