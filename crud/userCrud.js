'use strict';
require("../index.js");
const Users = require("../models/User");

let userCrudFunctions = [];

userCrudFunctions.createNewUser = async (name, surname, userName, password, email,
    avatar, membership="Free", membershipExpirationDate) =>{
    const newUser = new Users({name, surname, userName, password, email,avatar,membership,
    membershipExpirationDate });
    await newUser.save();
    console.log(newUser);
};

userCrudFunctions.findAllUsers = async () =>{
    const allUsers = await Users.find().lean();
    console.log(allUsers);
};

userCrudFunctions.findUserById = async (id) =>{
    const userFind = await Users.findById(id).lean();
    console.log(userFind);
}


userCrudFunctions.deleteUserById = async (id) =>{
    const deletedUser = await Users.findByIdAndDelete(id).lean();
    console.log(deletedUser + " ha sido borrado");
};

userCrudFunctions.updateUserById = async (id, name, surname, userName, password, email, avatar) =>{
    const userUpdated = await Users.findOneAndUpdate({_id: id}, {name, surname, userName, password, email, avatar}, {new: true}).lean();
    console.log(userUpdated);
};


/*
userCrudFunctions.createNewUser("Encarna", "Glez. Hernández", "Marglez1", "123456", "afdasfrehnsrt4@gmail.com");
userCrudFunctions.createNewUser("Jaime", "Glez. Hernández", "Panteneglez1", "123456", "alfasdst4@gmail.com");
userCrudFunctions.createNewUser("Cristian", "Glez. Hernández", "Karglez1", "123456", "fdfdast4@gmail.com");
userCrudFunctions.createNewUser("Lito Yayo", "Glez. Hernández", "yayoglez1", "123456", "alfdffdst4@gmail.com");
*/
/* userCrudFunctions.findAllUsers(); */

/* userCrudFunctions.findUserById("6013c9461abe6b5d08263f55"); */

/* userCrudFunctions.deleteById('6012c5cc432590023017dd85'); */

/* userCrudFunctions.updateUserById("6013c9461abe6b5d08263f55", "Ángel", "Glez. NuevoApellido", "Litocrak", "123456**", "litocrack@hotmail.com", ""); */



module.exports = userCrudFunctions;