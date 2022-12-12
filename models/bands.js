const mongoose =require("mongoose");

const bandSchema = mongoose.Schema({
    band : {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('band', bandSchema);