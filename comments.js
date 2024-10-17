// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that listens for GET requests at /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request to /comments');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});