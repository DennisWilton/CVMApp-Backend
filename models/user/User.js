import mongoose from 'mongoose';
import methods from './methods';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true},
    cpf: {type: String, required: true, unique: true, index: true},
    picture: String,
    telefone: String,
    oficina: Number,
    address: {
        street: String,
        number: Number,
        zip: Number
    },
    church: {
        name: String,
        minister: String,
    },
    isConfirmado: Boolean,
    payment: {
        actualCode: String,
        actualStatus: Number,
        failedCodes: [String]
    }
}, {collection: 'users'});


Object.assign(userSchema.methods, methods)

userSchema.plugin(uniqueValidator);

export default mongoose.model('User', userSchema);