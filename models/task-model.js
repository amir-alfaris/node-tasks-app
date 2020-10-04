import mongoose from 'mongoose';
import validator from 'validator';

const Task = mongoose.model('Task', {
    title: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Invalid name');
            }
        }
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export default Task;