'use strict';

const { userCrudFunctions } = require("../crud/userCrud");
const User = require("../models/User");

let usersController = [];

usersController.newUserform = (req, res) => {
    res.send("Formulario nuevo usuario")
};

usersController.newUser = (req, res) => {
    const newUserData = req.body;
    if (newUserData.name) {
        const newUser = new User(newUserData);
        newUser.save(error => {
            if (error) {
                console.error(`Error en usersController.newUser.save: ${error}`);
                return
            };

            res.json(newUser, "ggg");
        });
        return
    }
    res.send("Paco")
};


usersController.usersList = (req, res) => {
    User.find().lean()
        .then(allUsers => res.json(allUsers))
        .catch(error => console.error(`Error en CRUD usersList: ${error}`));
};

usersController.findUserById = (req, res) =>{
    const idBusqueda = req.params.id;
    if(req.params.id){
        User.findById({_id: idBusqueda}).lean().
            then(user => res.json(user)).
            catch(error => console.error(`Error en CRUD findUserrById.findbyId: ${error}`));
        return
    };
    res.send("Búsqueda por id");
};


module.exports = usersController;