var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        if (req.body.name && req.body.image && req.body.scores[0] && req.body.scores[1] && req.body.scores[2] && req.body.scores[3] && req.body.scores[4] && req.body.scores[5] && req.body.scores[6] && req.body.scores[7] && req.body.scores[8] && req.body.scores[9]) {
            friends.push(req.body);
            res.json(true);
        } else {
            res.json(false);
        }
    })
}

