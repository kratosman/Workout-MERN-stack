require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workout')


const mongoose = require('mongoose');
//express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/workouts', workoutRoutes);

//connect to db mongoose
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        console.log('connected to database');
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log('app listening on http://localhost:' + process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

