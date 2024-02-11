module.exports = {
    setHeader: function(res, headerName, headerValue) {
        res.setHeader(headerName, headerValue);
    },
    getHeader: function(req, headerName) {
        return req.headers[headerName];
    }
};