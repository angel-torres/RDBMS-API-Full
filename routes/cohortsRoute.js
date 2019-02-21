const express = require('express');
const route = express.Router();

const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/lambda.sqlite3'
    }
}

const db = knex(knexConfig)

route.get('/api/cohorts', async (req, res) => {
    try {
        const cohorts = await db('cohorts'); 
        res.status(200).json(cohorts)  
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = route;