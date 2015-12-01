var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.get('/people', function(req, res){
	var people = [
		{
			first_name: "John",
			last_name: "Doe",
			age: 34,
			gender: "male"
		},
		{
			first_name: "Tom",
			last_name: "Jackson",
			age: 27,
			gender: "male"
		},
		{
			first_name: "Tracy",
			last_name: "Smith",
			age: 30,
			gender: "female"
		}
	];

	res.json(people);
});

app.get('/download', function(req, res){
	res.download(path.join(__dirname, '/downloads/pdf-sample.pdf'));
});

app.get('/about', function(req, res){
	res.redirect('/about.html'); // will not work for res.sendFile('./about.html')
});

app.post('/subscribe', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	res.send(name+' has subscribed with '+email);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
	console.log('Server started on port 3000');
});