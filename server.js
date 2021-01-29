'use strict'

const morgan = require("morgan");
const express = require ("express");
const userRouter = require("./routes/usersRoutes");

const app = express();

const port = 3000;
app.listen(port, console.log("Conectado!"));

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(userRouter);
module.export = app;