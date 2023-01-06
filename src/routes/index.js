var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.view("index");
});

module.exports = router;