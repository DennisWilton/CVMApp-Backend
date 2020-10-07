import mongoose from 'mongoose';
import methods from './methods';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true},
    picture: String,
    telefone: String,
    address: {
        street: String,
        number: Number,
        zip: Number
    }
}, {collection: 'users'});


Object.assign(userSchema.methods, methods)

userSchema.plugin(uniqueValidator);

export default mongoose.model('User', userSchema);