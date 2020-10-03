import mongoose from 'mongoose';
import User from './models/user.js';
import Task from './models/task.js';

const connectionString = 'mongodb+srv://amir:2904@cluster0.t1yta.mongodb.net/tasks-app?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const amir = new User({
    name: 'Amir',
    age: 1,
    email: 'amir@aaxs.com',
    password: '1234567'
});

const task = new Task({
    title: 'cook'
});

amir.save().then((model) => {
    console.log(model);
}).catch((err) => {
    console.log((err));
});

task.save().then((model) => {
    console.log(model);
}).catch((err) => {
    console.log((err));
});