import mongoose from 'mongoose';
import User from './models/user.js';

const connectionString = 'mongodb+srv://amir:2904@cluster0.t1yta.mongodb.net/tasks-app?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const amir = new User({
    name: 'Amir',
    age: 'a'
});

amir.save().then((model) => {
    console.log(model);
}).catch((err) => {
    console.log((err));
});