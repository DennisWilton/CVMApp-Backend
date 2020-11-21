import mongoose, { Schema } from 'mongoose';
import methods from './methods';

const newsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.SchemaTypes.ObjectId, ref:'User', required: true},
    comments: {type: [String]}
}, {collection: 'news'});


Object.assign(newsSchema.methods, methods)

// newsSchema.plugin(uniqueValidator);

export default mongoose.model('News', newsSchema);