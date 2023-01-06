var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController");

router.get("/", function (req, res) {
    userController.listAll(req, res);
});

router.get("/usuario/:id", function (req, res) {
    userController.getUser(req, res);
});

router.post("/login", function (req, res) {
    userController.login(req, res);
});

router.post("/cadastro", function (req, res) {
    userController.registerUser(req, res);
});

router.put("/update/:id", function (req, res) {
    userController.updateUser(req, res);
});

router.delete("/delete/:id", function (req, res) {
    userController.deleteUser(req, res);
});

module.exports = router;