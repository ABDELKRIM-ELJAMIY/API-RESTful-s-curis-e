const User = require("../models/User");
const bcrypt = require("bcrypt");
module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Basic")) 
        return res.status(401).json({ error: "Unauthorized" });
    const base64 = authHeader.split(" ")[1];
    const [username, password] = Buffer.from(base64, "base64").toString("utf-8").split(":");
    const User = await User.findone({ email });
    if (!User || !(await bcrypt.compare(password, user.password))) {
        return res.status()
    }
    req.UserId = User._id;
    next();             
};