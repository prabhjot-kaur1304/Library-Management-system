import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    rollNo: {
        type: String,
        required: true,
        unique: true
    },

    department: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    booksIssued: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
);

const Student = mongoose.model("Student", studentSchema);

export default Student;