const http = require('http');
const fs = require('fs');
const cors = require('cors');  // Importing CORS module

const foodItems = [
  { id: 1, name: 'Pizza', price: 10, image: 'https://via.placeholder.com/150?text=Pizza' },
  { id: 2, name: 'Burger', price: 5, image: 'https://via.placeholder.com/150?text=Burger' },
  { id: 3, name: 'Pasta', price: 8, image: 'https://via.placeholder.com/150?text=Pasta' },
];

const server = http.createServer((req, res) => {
  // Allow cross-origin requests from all origins
  cors()(req, res, () => {
    if (req.url === '/api/food' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(foodItems));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
