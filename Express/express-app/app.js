const express = require('express');
const cookieParser = require('cookie-parser');
const { setCookie, getCookie } = require('./helpers/cookieHelpers');
const { setHeader, getHeader } = require('./helpers/headerHelpers');

const app = express();
app.use(cookieParser());

app.use((req, res, next) => {
    req.queryParams = req.query;
    next();
});
app.get('/cookie/set', (req, res) => {
    const { name, value, http_only } = req.queryParams;
    setCookie(res, name, value, http_only);
    res.json({ message: 'Cookie set successfully' });
});

app.get('/cookie/get/:name', (req, res) => {
    const cookieValue = getCookie(req, req.params.name);
    if (cookieValue) {
        res.json({ [req.params.name]: cookieValue });
    } else {
        res.status(404).json({ message: 'Cookie not found' });
    }
});

app.get('/header/set', (req, res) => {
    const { name, value } = req.queryParams;
    setHeader(res, name, value);
    res.json({ message: 'Header set successfully' });
});

app.get('/header/get/:name', (req, res) => {
    const headerValue = getHeader(req, req.params.name);
    if (headerValue) {
        res.json({ [req.params.name]: headerValue });
    } else {
        res.status(404).json({ message: 'Header not found' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//http://localhost:3000/cookie/set?name=myCookie&value=cookieValue&http_only=true
//http://localhost:3000/cookie/get/myCookie

//http://localhost:3000/header/set?name=Custom-Header&value=Hello
//http://localhost:3000/header/get/Custom-Header