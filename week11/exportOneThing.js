function cheese(req, res){
    res.send(req.params.cheese)
};

// sending one thing, like module.exports = cheese;
export default cheese;