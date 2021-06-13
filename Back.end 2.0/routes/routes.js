var express = require("express")
var app = express();
var router = express.Router();
var UserController = require("../controllers/UserController");
var AdminAuth = require("../middleware/AdminAuth");

router.post('/user', UserController.create);
router.get("/user",UserController.index);
router.put("/user",UserController.edit);
router.put("/like", UserController.like);

module.exports = router;