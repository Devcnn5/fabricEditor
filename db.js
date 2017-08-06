var mysql= require('mysql');
	
var connection = mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'fresh'


});

//var result=connection.query('SELECT * From articles');
//console.log(result);
module.exports=connection;