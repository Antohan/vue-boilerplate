const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
app.set('port', port);

// here we are configuring dist to serve features files
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('Server start at port %d', app.get('port'));
});
