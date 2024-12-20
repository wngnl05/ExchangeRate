const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(cookieParser()); // 쿠키
app.use(bodyParser.json());
app.use(express.json());

// routes
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public/index/index.html')) });
app.use("/exchageRate", require("./routes/exchangeRouter.js"));

// static set
app.use(express.static(path.join(__dirname, 'public')));

// run server
app.listen(8080, () => { console.log("http://localhost:8080") });