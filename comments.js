// Create web server to handle comments

// Import express module
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// Set up server to use bodyParser
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set up server to use public folder
app.use(express.static('public'));

// Get comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Set up server to listen on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Set up server to handle GET requests to /comments
app.get('/comments', function (req, res) {
  res.send(comments);
});

// Set up server to handle POST requests to /comments
app.post('/comments', function (req, res) {
  // Get comment from request
  var comment = req.body;
  // Add comment to comments array
  comments.push(comment);
  // Write comments array to file
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  // Send comment back to client
  res.send(comment);
});

 