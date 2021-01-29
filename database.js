'use strict'

const mongoose =  require ("mongoose");

mongoose.connect("mongodb://localhost/user_webcoches",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
).then(db => console.log("BD conectada")).catch(e => console.error("Error de conexión"));

module.export = mongoose;


