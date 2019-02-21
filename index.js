const express = require("express");
const helmet = require('helmet');
const server = require('./server.js');
const cohortRoute = require('./routes/cohortsRoute.js')

server.use(express.json());
server.use(helmet());

server.use(cohortRoute);

server.get('/', async (req, res) => {
    try {
        res.status(200).json({message: "Welcome to database."})
    } catch (error) {
        res.status(500).json(error)
    }
});

server.listen(5000, () => {
    console.log("\n *** Running on port 5000 *** \n")
});