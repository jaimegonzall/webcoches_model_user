'use strict'

const {Schema, model, now} = require("mongoose");

const userSchema = new Schema ({
    name : {
        type : String,
        required : true
    },

    surname: {
        type : String,
        required : true
    },

    dniNumber: {
        type : String
    },

    userName : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    
    password : {
        type : String,
        required : true,
        minlength: 6
    },
    
    email : {
        type : String,
        required : true,
        unique : true
    },

    avatar : {
        type: String,
        default : ""
    },

    membership: {
        type : String,
        default : "Free",
        enum: ["Free", "Gold", "Silver", "Bronze"],
        required : true
    },

    membershipExpirationDate:{
        type : Date,
        default: Date.now
    },

    leasedCars: {
        type : String
    }

});

module.exports = model("user", userSchema)








