const {Router} = require("express");
const usersController = require("../controllers/usersController")
userRouter = Router();

userRouter.get("/", usersController.usersList);
userRouter.get("/newUser", usersController.newUserform);
userRouter.post("/newUser", usersController.newUser);
userRouter.post("/userById", usersController.findUserById);
userRouter.post("/deletedUserById", usersController.deleteUserById);
userRouter.post("/updatedUserById", usersController.updateUserById);

module.exports = userRouter;
