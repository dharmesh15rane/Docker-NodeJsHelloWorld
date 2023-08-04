const express = require('express')
const app = express()

const port = process.env.PORT || 3030;

app.get('/', (req, res) =>  res.sendFile(__dirname + "/index.html"));

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`listening on port ${port}`);
  });
