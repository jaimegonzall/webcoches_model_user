'use strict';

const {userCrudFunctions} = require("../crud/userCrud");

let usersController = [];

usersController.usersList = async (req, res) =>{
    const allUsers =  await userCrudFunctions.findAllUsers();
    console.log(allUsers);
    
};




module.exports = usersController;