const express = require('express');
const route = express.Router();

const db = require('../data/dbConfig.js')

route.get('/', async (req, res) => {
    try {
        const cohorts = await db('cohorts'); 
        res.status(200).json(cohorts)  
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const cohort = await db('cohorts').where({id: req.params.id}).first('name');
        res.status(200).json(cohort)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get('/:id/students', async (req, res) => {
    const id = req.params.id;
    try {
        const cohortStudents = await db('cohorts').where({ id :students.cohort_id}).innerJoin('students');
        res.status(200).json(cohortStudents);
    } catch (error) {
        res.status(500).json(error)
    }
})

route.post('/', async (req, res) => {
    try {
        const [id] = await db('cohorts').insert(req.body);
        const cohort = await db('cohorts').where({ id }).first();
        res.status(200).json(cohort)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updated = await db('cohorts').where({id}).update(req.body)
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json(error)
    }
});

route.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const removed = await db('cohorts').where({id}).del();
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = route;