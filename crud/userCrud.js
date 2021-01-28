'use strict';

const users = require("../models/user");

userCrudFunctions = [];

userCrudFunctions.createNewUser = (name, surname, userName, password, email,
    avatar, membership="Free", membershipExpirationDate=Date.now) =>{
    const newUser = users.create({name, surname, userName, password, email,avatar,membership,
    membershipExpirationDate });
    newUser.save();
    console.log(newUser);
};

userCrudFunctions.findAllUsers = () =>{
    const allUsers = users.find();
    console.log(allUsers);
};


module.exports = userCrudFunctions;