import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const catSchema = new Schema({
    name : String,
    age: Number,
    owner: String
       
});

export const CatModel = mongoose.model('cats', catSchema);
