module.exports = {
    setCookie: function(res, cookieName, cookieValue, httpOnly = true) {
        res.cookie(cookieName, cookieValue, { httpOnly: httpOnly });
    },
    getCookie: function(req, cookieName) {
        return req.cookies[cookieName];
    }
};