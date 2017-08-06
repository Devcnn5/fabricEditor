var connection=require('./db');
if(connection){
	console.log("connection established");

}

var Tasks={
	saveCanvas: function(Task,callback){
		var sql = "Insert into Photos(photoName,photojson) values(?,?) ";
		var param1 = Task.name;
		var param2 = Task.photo;
		return connection.query(sql,[param1,param2],callback);
	},
	getImage: function(Task,callback){
		var sql = "Select * from Photos where id=?";
		return connection.query(sql,Task.id,callback);
	}


};

module.exports=Tasks;