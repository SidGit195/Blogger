const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName){
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];

        if(!tokenCookieValue){ 
            return next();                          // next() ke baad kuch execute nahi karna
        }
        
        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;                // notice req.user
            } catch (error) {}

        return next();
    }
}

module.exports = checkForAuthenticationCookie;
