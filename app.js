// Import the 'http' module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    // Set response header content type to text
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // Send "Hello World" message
    res.end('Hello World!\n');
});

// The server listens on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
