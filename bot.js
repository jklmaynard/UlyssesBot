var Twit = require('twit')
var mysql = require('mysql')
var newTweet = new Twit(require('./config.js'));

var connection = mysql.createConnection({
	host : 'blah',
	port : 'blah',
	user : 'blah',
	password : 'blah',
	database: 'blah'
});

getRandomRow = 'SELECT text, used FROM [table] WHERE used=FALSE ORDER BY RAND() LIMIT 1';

function leoSpeaks() {

	connection.query(getRandomRow, function(err, result, fields) {
		if (err) throw err;
		else {
			for (key in result)
				valueRand = result[key];
			};
				console.log(valueRand.text)
				var quote = valueRand.text
		connection.query('UPDATE [table] SET used=TRUE WHERE text=' + mysql.escape(quote), valueRand, function(err, result) {
		});		
	
		newTweet.post('statuses/update', { status: quote }, function(error, data, response) {
			if (error) console.log(error)
				else
			console.log(data);
		});
	});	

}

setInterval(leoSpeaks, 1000 * 60 * 240);

leoSpeaks();

