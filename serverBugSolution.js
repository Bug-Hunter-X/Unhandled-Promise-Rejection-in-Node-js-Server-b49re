const http = require('http');

const server = http.createServer((req, res) => {
  // Use a Promise to handle asynchronous operations properly
  fetchData()
    .then((data) => {
      if (data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error fetching data!');
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error!');
    });
});

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const randomNumber = Math.random();
    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve('Data');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 500);
  });
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});