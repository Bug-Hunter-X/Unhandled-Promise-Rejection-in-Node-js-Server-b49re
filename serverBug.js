const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const data = fetchData();

  if (data) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  } else {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error!');
  }
});

function fetchData() {
  // Simulate a scenario where asynchronous operation may fail
  const randomNumber = Math.random();
  if(randomNumber < 0.5){
    return 'Data';
  }else{
    return null;
  }
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});