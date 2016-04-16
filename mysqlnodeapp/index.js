var mysql      = require('mysql');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : 'stalker',
 database : 'sakila'  //database you are using goes here
});

connection.connect(function(err) {
 if (err) {
   console.error('error connecting: ' + err.stack);
   return;
 }

 console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM sakila.actor', function(err,res){
	if(err) throw err;
});