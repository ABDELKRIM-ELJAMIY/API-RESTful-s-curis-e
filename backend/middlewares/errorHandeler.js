module.exports = (req, res, next) => { 
    console.log("Error handler middleware");
    res.status(500).json({ error: "Internal Server Error" });
    // next(); 
};