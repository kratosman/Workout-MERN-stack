const express = require('express');
const { 
    createWorkout,
    getWorkouts,
    getSingleWorkouts,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController');
// const Workout = require('../models/workoutModel')


const router = express.Router();

// GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getSingleWorkouts)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)


module.exports = router