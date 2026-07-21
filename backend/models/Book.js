import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    image:{
        type:String,
        default:""
    },

    status:{
        type:String,
        enum:["Available","Issued"],
        default:"Available"
    },

    progress:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
}
);

const Book = mongoose.model("Book", bookSchema);

export default Book;