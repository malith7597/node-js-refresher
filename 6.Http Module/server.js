const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
