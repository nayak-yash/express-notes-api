const mongoose = require("mongoose");
const NoteSchema = mongoose.Schema({

    title : {
        type :String,
        required :true
    },
    description : {
        type :String,
        required :true
    },
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref :"User",
        required :true
    },
    createdAt : {
        type :Number,
        required :true
    },
    status :{
        type :Boolean,
        required :false
    },
    location: {
        type :String,
        required :false
    },
    isFavorite: {
        type :Boolean,
        required :true
    },
    isPrivate: {
        type :Boolean,
        required :true
    }
});
module.exports = mongoose.model("Note",NoteSchema)
