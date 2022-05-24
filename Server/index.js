const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/user.model');



app.use(cors());
app.use(express.json())

const courseRouter = require('./routes/courseRoutes.js');
const cloRouter = require('./routes/clo_routes.js');
const instructorRouter = require ('./routes/instructorRoutes.js');
const classRouter = require('./routes/classes_routes.js');
const courseAssignedRouter = require ('./routes/courseAssigned_routes.js');

const MONGODB_URI = 'mongodb+srv://user:user@cluster0.jzc5o.mongodb.net/Bobe?retryWrites=true&w=majority'
mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
)

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
})

app.use(courseRouter);
app.use(cloRouter);
app.use(instructorRouter);
app.use(classRouter);
app.use(courseAssignedRouter);

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.status(200).json({'success' : true})
    } catch (error) {
        res.status(200).json({'success' : false, 'Error': 'Duplicate email'})
    }
});

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({ 
        email: req.body.email, 
        password: req.body.password 
    })
    
    if (user) {
        res.status(200).json({'success' : true, 'user': user.name})
    } else {
        res.status(200).json({'success' : false})
    }
});

app.listen(1337, () => {
    console.log('Server started on 1337');
});