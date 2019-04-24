require('dotenv').config(); // add this line as the first thing to run1
const port = process.env.PORT || 5000;

// import server from './server.js'
const server = require('./server.js'); // <<<<<<<<<< import server

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
