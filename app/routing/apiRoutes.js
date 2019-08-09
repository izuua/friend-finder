var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        if (req.body.name && req.body.image && req.body.q1 && req.body.q2 && req.body.q3 && req.body.q4 && req.body.q5 && req.body.q6 && req.body.q7 && req.body.q8 && req.body.q9 && req.body.q10) {
            friends.push(req.body);
            res.json(true);
        } else {
            res.json(false);
        }
    })
}

