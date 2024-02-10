const express = require('express');
const cookieParser = require('cookie-parser');
const { setCookie, getCookie } = require('./helpers/cookieHelpers');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    setCookie(res, 'myCookie', 'cookieValue', true);
    res.send('Cookie set successfully!');
});

app.get('/readCookie', (req, res) => {
    const cookieValue = getCookie(req, 'myCookie');
    res.send('Value of myCookie: ' + cookieValue);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});