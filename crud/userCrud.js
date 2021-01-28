'use strict';
require("../index.js");
const users = require("../models/user");

let userCrudFunctions = [];

userCrudFunctions.createNewUser = async (name, surname, userName, password, email,
    avatar, membership="Free", membershipExpirationDate) =>{
    const newUser = new users({name, surname, userName, password, email,avatar,membership,
    membershipExpirationDate });
    await newUser.save();
    console.log(newUser);
};

userCrudFunctions.findAllUsers = async () =>{
    const allUsers = await users.find();
    console.log(allUsers);
};

/* userCrudFunctions.createNewUser("Paco", "Martínez Fdez.", "pacomartinez", "123456*", "paco@gmail.com");
 */

userCrudFunctions.findAllUsers();

module.exports = userCrudFunctions;