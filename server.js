'use strict'


const express = require ("express");
const app = express();

const port = 3000;
app.listen(port, console.log("Conectado!"));

module.export = app;