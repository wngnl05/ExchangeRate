const express = require('express');
const path = require('path');
const app = express();


// routes
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public/index/index.html')) });
app.get('/exchageRate', (req, res) => { require(path.join(__dirname, 'routes/exchageRouter.js')) });

// static set
app.use(express.static(path.join(__dirname, 'public')));

// run server
app.listen(8080, () => { console.log("http://localhost:8080") });