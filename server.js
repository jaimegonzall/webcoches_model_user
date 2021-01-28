'use strict'

const morgan = require("morgan");

const express = require ("express");
const app = express();

const port = 3000;
app.listen(port, console.log("Conectado!"));

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

module.export = app;
