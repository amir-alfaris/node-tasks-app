import mongoose from 'mongoose';
import validator from 'validator';

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Invalid name');
            }
        }
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Enter valid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    }
});

export default User;