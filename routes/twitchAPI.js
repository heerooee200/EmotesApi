var express   = require("express");
let emotes    = require("../scripts/loadEmotes.js");
var router = express.Router();

router.get("/", function(req, res, next) {

    res.send(emotes.loadEmotes(req.query.channelid));
    
});



module.exports = router;