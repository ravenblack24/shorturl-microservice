const invalidResponse = (res) => {
    res.json({"error": "invalid URL"});  
}

module.exports = {invalidResponse}