import mongoose from 'mongoose';
import methods from './methods';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String},
    content: {type: String, required: true},
}, {collection: 'posts'});


Object.assign(userSchema.methods, methods)

userSchema.plugin(uniqueValidator);

export default mongoose.model('Post', userSchema);