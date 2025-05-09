const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth?.startsWith("Bearer"))
        return res.status(401).json({ error: "Unauthorized" });
    try {
        const decoded = jwt.verefy(auth.split(" ")[1], process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();

    }
    catch (err) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};