import mongoose from 'mongoose';
import express from 'express';

import userRouter from './routers/user-router.js';
import taskRouter from './routers/task-router.js';

const connectionString = 'mongodb+srv://amir:2904@cluster0.t1yta.mongodb.net/tasks-app?retryWrites=true&w=majority';
const app = express();
const port = 3000;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use('/users', userRouter);
app.use('/tasks', taskRouter);

app.listen(port);

// const amir = new User({
//     name: 'Amir',
//     age: 1,
//     email: 'amir@aaxs.com',
//     password: '1234567'
// });

// const task = new Task({
//     title: 'cook'
// });

// amir.save().then((model) => {
//     console.log(model);
// }).catch((err) => {
//     console.log((err));
// });

// task.save().then((model) => {
//     console.log(model);
// }).catch((err) => {
//     console.log((err));
// });