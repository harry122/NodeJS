module.exports.handleError = (req,res) => {
    res.status(500).send("Something Went Wrong");
}

module.exports.notFound = (req,res) => {
    res.status(404).send("Page Not Found");
}