const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8081;

const population_levels_API = require("./API/API population-levels.js");
const Datastore = require('nedb');

//BASE DE DATOS

db_population_levels = new Datastore();

app.use(cors());
app.use(bodyParser.json());


// SERVER APIs

population_levels_API.register(app,db_population_levels);

app.use("/", express.static('public'));

app.listen(port, () => {
    console.log(`Servidor listo ${port}`)
});

