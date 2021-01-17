import mongoose, { Schema } from 'mongoose';
import methods from './methods';

const workshopSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
}, {collection: 'workshop'});


Object.assign(workshopSchema.methods, methods)

export default mongoose.model('Workshop', workshopSchema);