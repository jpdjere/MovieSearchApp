const mongoose = require('mongoose');
const {Schema} = mongoose;

const MovieSchema = new Schema({
    tconst: String,
    titleType: String,
    primaryTitle: String,
    originalTitle: String,
    isAdult: Number,
    startYear: String,
    endYear: String,
    runtimeMinutes: Number,
    genres: String
});

//Create a model class and tell Mongoose it has to be aware of it
mongoose.model('movie',MovieSchema)
