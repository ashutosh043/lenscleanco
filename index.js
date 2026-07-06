const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
app.set('view engine', 'ejs');
const router = require('./controller/nijivsha')

app.use(express.static(path.join(__dirname, '/public')))
app.use(router)





app.listen(port);
