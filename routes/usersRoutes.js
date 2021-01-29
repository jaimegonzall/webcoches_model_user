const {Router} = require("express");
const usersController = require("../controllers/usersController")
userRouter = Router();

userRouter.get("/", usersController.usersList());


module.exports = userRouter;
