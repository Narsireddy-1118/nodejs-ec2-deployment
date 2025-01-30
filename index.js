const express = require('express');
const app = express();
const port = 80; // Port 80 is the default HTTP port

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
